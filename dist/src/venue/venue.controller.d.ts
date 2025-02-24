import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    create(input: CreateVenueDto): Promise<{
        message: string;
        data: {
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
        };
    }>;
    findAll(): Promise<{
        message: string;
        data: {
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
        };
    }>;
    update(id: string, input: UpdateVenueDto): Promise<{
        message: string;
        data: {
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
        };
    }>;
}
