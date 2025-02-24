import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { VenueService } from 'src/venue/venue.service';
import { CategoryService } from 'src/category/category.service';
import { EventSelect } from 'src/queryselect';
import { _User } from 'src/interface';
import { Prisma } from '@prisma/client';
import { FilterEventDto } from './dto/filter-event.dto';

@Injectable()
export class EventService {
  constructor(
    private prisma: PrismaService,
    private readonly venueService: VenueService,
    private readonly categoryService: CategoryService,
  ) {}

  async create(input: CreateEventDto, user: _User) {
    const {
      venueId,
      categoryId,
      date,
      recurringDays,
      startDate,
      endDate,
      customDates,
      annualYearsCount,
      ...eventDto
    } = input;
    await this.venueService.findOne(venueId);
    await this.categoryService.findOne(categoryId);
    const data: Prisma.EventCreateInput = {
      ...eventDto,
      category: { connect: { id: categoryId } },
      venue: { connect: { id: venueId } },
      user: { connect: { id: user.id } },
    };
    switch (input.eventType) {
      case 'SINGLE_DAY':
        if (!date) {
          throw new BadRequestException(
            'Date is required for single day event',
          );
        }
        data.date = new Date(input.date);
        break;
      case 'CUSTOM_DATE':
        if (!customDates || customDates.length === 0) {
          throw new BadRequestException(
            'At least one date is required for CUSTOM_DATE event',
          );
        }
        data.recurringDates = customDates.map((date) => new Date(date));
        break;
      case 'ALL_DAYS':
        if (!startDate || !endDate) {
          throw new BadRequestException(
            'Start date and end date are required for ALL_DAYS event',
          );
        }
        data.recurringDates = await this.generateAllDays(startDate, endDate);

        break;
      case 'ANNUAL':
        if (!date || !annualYearsCount) {
          throw new BadRequestException('Date is required for ANNUAL event');
        }
        data.recurringDates = await this.generateAnnualEvent(
          date,
          annualYearsCount,
        );
        break;
      case 'SEASONAL':
        if (!startDate || !endDate) {
          throw new BadRequestException(
            'Start date and end date are required for ALL_DAYS event',
          );
        }
        data.recurringDates = await this.generateAllDays(startDate, endDate);
        break;
      case 'FIRST_SATURDAY':
        data.recurringDates = await this.generateFirstSaturdayEvents();
        break;
      case 'RECURRING':
        if (
          !recurringDays ||
          recurringDays.length === 0 ||
          !startDate ||
          !endDate
        ) {
          throw new BadRequestException(
            'At least one day is required for RECURRING event',
          );
        }
        data.recurringDates = await this.generateRecurringEvents(
          recurringDays,
          startDate,
          endDate,
        );
        break;
    }
    return await this.prisma.event.create({
      data,
      select: EventSelect,
    });
  }

  // Generates all days between start and end date
  private async generateAllDays(startDate: string, endDate: string) {
    const dates: Date[] = [];
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    for (let date = sDate; date <= eDate; date.setDate(date.getDate() + 1)) {
      dates.push(new Date(date));
    }
    return dates;
  }

  // Generates annual events for the given date and years count
  private async generateAnnualEvent(date: string, yearsCount: number) {
    const dates: Date[] = [];
    const baseDate = new Date(date);
    const currentYear = baseDate.getFullYear();
    // for (let year = currentYear; year < currentYear + yearsCount; year++) {
    //   dates.push(new Date(year, baseDate.getMonth(), baseDate.getDate()));
    // }
    for (let i = 0; i < yearsCount; i++) {
      const newDate = new Date(baseDate);
      newDate.setFullYear(currentYear + i);
      dates.push(newDate);
    }
    return dates;
  }

  // Generates First Saturday of every month for the next year
  private generateFirstSaturdayEvents() {
    const dates: Date[] = [];
    const now = new Date();
    const year = now.getFullYear();

    for (let month = 0; month < 12; month++) {
      const firstSaturday = new Date(year, month, 1);
      while (firstSaturday.getDay() !== 6) {
        firstSaturday.setDate(firstSaturday.getDate() + 1);
      }
      dates.push(new Date(firstSaturday));
    }
    return dates;
  }

  // Generates recurring events for the given days of the week
  private async generateRecurringEvents(
    recurringDays: string[],
    startDate: string,
    endDate: string,
  ) {
    const dates: Date[] = [];
    let currentDate = new Date(startDate);
    const end = new Date(endDate);
    while (currentDate <= end) {
      const daysOfWeek = currentDate
        .toLocaleDateString('en-US', {
          weekday: 'long',
        })
        .toLowerCase();
      if (recurringDays.includes(daysOfWeek)) {
        dates.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  async findAll(query: FilterEventDto) {
    const args: Prisma.EventFindManyArgs = {
      orderBy: { createdAt: 'desc' },
      select: EventSelect,
    };
    const where: Prisma.EventWhereInput = {
      recordStatus: { not: 'DELETED' },
    };
    if (query.registrationType) {
      where.registrationType = query.registrationType;
    }
    if (query.eventType) {
      where.eventType = query.eventType;
    }
    if (query.venueId) {
      where.venueId = query.venueId;
    }
    args.where = where;
    return await this.prisma.event.findMany(args);
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: {
        id,
        recordStatus: { not: 'DELETED' },
      },
      select: EventSelect,
    });
    if (!event) {
      throw new BadRequestException('Event not found');
    }
    return event;
  }

  async update(id: string, input: UpdateEventDto) {
    await this.findOne(id);
    await this.venueService.findOne(input.venueId);
    const event = await this.prisma.event.update({
      where: { id },
      data: { ...input },
      select: EventSelect,
    });
    return event;
  }

  async remove(id: string) {
    const event = await this.prisma.event.update({
      where: { id },
      data: { recordStatus: 'DELETED' },
      select: {
        id: true,
      },
    });
    return event;
  }
}
