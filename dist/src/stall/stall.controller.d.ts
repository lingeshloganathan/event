import { StallService } from './stall.service';
import { CreateStallDto } from './dto/create-stall.dto';
import { UpdateStallDto } from './dto/update-stall.dto';
import { FilterStallDto } from './dto/filter-stall.dto';
import { _User } from 'src/interface';
export declare class StallController {
    private readonly stallService;
    constructor(stallService: StallService);
    create(input: CreateStallDto, user: _User): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            user: {
                name: string | null;
                id: string;
                recordStatus: import("@prisma/client").$Enums.RecordStatus;
                createdAt: Date;
                updatedAt: Date;
                phoneNumber: string;
                email: string | null;
                gender: import("@prisma/client").$Enums.Gender | null;
                roleId: string | null;
            } | null;
            userId: string | null;
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
            status: import("@prisma/client").$Enums.StallStatus;
        };
    }>;
    findAll(filter: FilterStallDto): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            user: {
                name: string | null;
                id: string;
                recordStatus: import("@prisma/client").$Enums.RecordStatus;
                createdAt: Date;
                updatedAt: Date;
                phoneNumber: string;
                email: string | null;
                gender: import("@prisma/client").$Enums.Gender | null;
                roleId: string | null;
            } | null;
            userId: string | null;
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
            status: import("@prisma/client").$Enums.StallStatus;
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
            user: {
                name: string | null;
                id: string;
                recordStatus: import("@prisma/client").$Enums.RecordStatus;
                createdAt: Date;
                updatedAt: Date;
                phoneNumber: string;
                email: string | null;
                gender: import("@prisma/client").$Enums.Gender | null;
                roleId: string | null;
            } | null;
            userId: string | null;
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
            status: import("@prisma/client").$Enums.StallStatus;
        };
    }>;
    update(id: string, input: UpdateStallDto): Promise<{
        message: string;
        data: {
            name: string;
            id: string;
            status: import("@prisma/client").$Enums.StallStatus;
        };
    }>;
}
