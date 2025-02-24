import { CreateGuestDto } from './dto/create-guest.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilterGuestDto } from './dto/filter-guest.dto';
import { EventService } from 'src/event/event.service';
export declare class GuestService {
    private readonly prisma;
    private readonly eventService;
    constructor(prisma: PrismaService, eventService: EventService);
    create(input: CreateGuestDto): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        event: {
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
        };
        eventId: string;
    }>;
    findAll(filter: FilterGuestDto): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        event: {
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
        };
        eventId: string;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        event: {
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
        };
        eventId: string;
    }>;
}
