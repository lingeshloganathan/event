import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class VenueService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: CreateVenueDto): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        events: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            eventType: import("@prisma/client").$Enums.EventType;
            registrationType: import("@prisma/client").$Enums.RegistrationType;
            date: Date | null;
            recurringDates: Date[];
            venueId: string;
            userId: string;
            categoryId: string | null;
        }[];
        _count: {
            events: number;
        };
        address: string;
        capacity: number | null;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        events: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            eventType: import("@prisma/client").$Enums.EventType;
            registrationType: import("@prisma/client").$Enums.RegistrationType;
            date: Date | null;
            recurringDates: Date[];
            venueId: string;
            userId: string;
            categoryId: string | null;
        }[];
        _count: {
            events: number;
        };
        address: string;
        capacity: number | null;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        events: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            eventType: import("@prisma/client").$Enums.EventType;
            registrationType: import("@prisma/client").$Enums.RegistrationType;
            date: Date | null;
            recurringDates: Date[];
            venueId: string;
            userId: string;
            categoryId: string | null;
        }[];
        _count: {
            events: number;
        };
        address: string;
        capacity: number | null;
    }>;
    update(id: string, input: UpdateVenueDto): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        events: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            eventType: import("@prisma/client").$Enums.EventType;
            registrationType: import("@prisma/client").$Enums.RegistrationType;
            date: Date | null;
            recurringDates: Date[];
            venueId: string;
            userId: string;
            categoryId: string | null;
        }[];
        _count: {
            events: number;
        };
        address: string;
        capacity: number | null;
    }>;
}
