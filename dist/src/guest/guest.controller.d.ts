import { GuestService } from './guest.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { FilterGuestDto } from './dto/filter-guest.dto';
export declare class GuestController {
    private readonly guestService;
    constructor(guestService: GuestService);
    create(input: CreateGuestDto): Promise<{
        message: string;
        data: {
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
        };
    }>;
    findAll(filter: FilterGuestDto): Promise<{
        message: string;
        data: {
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
        }[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: {
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
        };
    }>;
}
