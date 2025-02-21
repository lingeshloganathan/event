import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtGuard } from 'src/guard/jwt-guard';
import { VenueSelect } from 'src/queryselect';

@Injectable()
export class VenueService {
  constructor(private readonly prisma: PrismaService) {}

  @UseGuards(JwtGuard)
  async create(input: CreateVenueDto) {
    const venue = await this.prisma.venue.create({
      data: {
        name: input.name,
        address: input.address,
        capacity: input.capacity,
      },
      select: VenueSelect,
    });
    return venue;
  }

  async findAll() {
    return await this.prisma.venue.findMany({
      where: {
        recordStatus: { not: 'DELETED' },
      },
      select: VenueSelect,
    });
  }

  async findOne(id: string) {
    const venue = await this.prisma.venue.findUnique({
      where: { id, recordStatus: { not: 'DELETED' } },
      select: VenueSelect,
    });
    if (!venue) {
      throw new NotFoundException('Venue not found');
    }
    return venue;
  }

  async update(id: string, input: UpdateVenueDto) {
    const venue = await this.findOne(id);
    return await this.prisma.venue.update({
      where: { id },
      select: VenueSelect,
      data: {
        name: input.name,
        address: input.address,
        capacity: input.capacity,
      },
    });
  }
}
