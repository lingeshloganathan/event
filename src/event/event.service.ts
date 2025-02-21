import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateEventDto, user: User) {
    const { categoryId, venueId, ...eventDto } = input;
    const data = await this.prisma.event.create({
      data: {
        ...eventDto,
        categoryId,
        venueId,
        userId: user.id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        eventType: true,
        registrationType: true,
        venue: {
          select: {
            name: true,
            address: true,
          },
        },
        category: {
          select: {
            name: true,
            subcategories: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return data;
  }

  async findAll() {
    return await this.prisma.event.findMany({
      where: {
        recordStatus: { not: 'DELETED' },
      },
      select: {
        id: true,
        name: true,
        description: true,
        eventType: true,
        registrationType: true,
        venue: {
          select: {
            name: true,
            address: true,
          },
        },
        category: {
          select: {
            name: true,
            subcategories: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: {
        id,
        recordStatus: { not: 'DELETED' },
      },
      select: {
        id: true,
        name: true,
        description: true,
        eventType: true,
        registrationType: true,
        venue: {
          select: {
            name: true,
            address: true,
          },
        },
        category: {
          select: {
            name: true,
            subcategories: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    if (!event) {
      throw new BadRequestException('Event not found');
    }
    return event;
  }

  async update(id: string, input: UpdateEventDto) {
    const event = await this.prisma.event.update({
      where: { id },
      data: { ...input },
      select: {
        id: true,
        name: true,
        description: true,
        eventType: true,
        registrationType: true,
        venue: {
          select: {
            name: true,
            address: true,
          },
        },
        category: {
          select: {
            name: true,
            subcategories: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return event;
  }

  async remove(id: string) {
    const event = await this.prisma.event.update({
      where: { id },
      data: { recordStatus: 'DELETED' },
      select: {
        id: true,
        name: true,
        description: true,
        eventType: true,
        registrationType: true,
        venue: {
          select: {
            name: true,
            address: true,
          },
        },
        category: {
          select: {
            name: true,
            subcategories: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return event;
  }
}
