import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { VenueService } from 'src/venue/venue.service';
import { CategoryService } from 'src/category/category.service';
import { _User } from 'src/interface';
import { FilterEventDto } from './dto/filter-event.dto';
export declare class EventService {
    private prisma;
    private readonly venueService;
    private readonly categoryService;
    constructor(prisma: PrismaService, venueService: VenueService, categoryService: CategoryService);
    create(input: CreateEventDto, user: _User): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        category: {
            name: string;
            parentId: string | null;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        _count: {
            venue: number;
            user: number;
            tickets: number;
            stalls: number;
            guests: number;
            participants: number;
            category: number;
        };
        description: string;
        eventType: import("@prisma/client").$Enums.EventType;
        registrationType: import("@prisma/client").$Enums.RegistrationType;
        date: Date | null;
        recurringDates: Date[];
        venue: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            capacity: number | null;
        };
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
        };
        tickets: {
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            status: import("@prisma/client").$Enums.TicketStatus;
            qrCode: string;
            selectedDates: Date[];
            participantId: string | null;
        }[];
        stalls: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            eventId: string;
            status: import("@prisma/client").$Enums.StallStatus;
        }[];
        guests: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            eventId: string;
        }[];
        participants: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            status: import("@prisma/client").$Enums.ParticipantStatus;
            ticketId: string | null;
        }[];
        venueId: string;
        userId: string;
        categoryId: string | null;
    }>;
    private generateAllDays;
    private generateAnnualEvent;
    private generateFirstSaturdayEvents;
    private generateRecurringEvents;
    findAll(query: FilterEventDto): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        category: {
            name: string;
            parentId: string | null;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        _count: {
            venue: number;
            user: number;
            tickets: number;
            stalls: number;
            guests: number;
            participants: number;
            category: number;
        };
        description: string;
        eventType: import("@prisma/client").$Enums.EventType;
        registrationType: import("@prisma/client").$Enums.RegistrationType;
        date: Date | null;
        recurringDates: Date[];
        venue: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            capacity: number | null;
        };
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
        };
        tickets: {
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            status: import("@prisma/client").$Enums.TicketStatus;
            qrCode: string;
            selectedDates: Date[];
            participantId: string | null;
        }[];
        stalls: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            eventId: string;
            status: import("@prisma/client").$Enums.StallStatus;
        }[];
        guests: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            eventId: string;
        }[];
        participants: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            status: import("@prisma/client").$Enums.ParticipantStatus;
            ticketId: string | null;
        }[];
        venueId: string;
        userId: string;
        categoryId: string | null;
    }>;
    update(id: string, input: UpdateEventDto): Promise<{
        name: string;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        category: {
            name: string;
            parentId: string | null;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        _count: {
            venue: number;
            user: number;
            tickets: number;
            stalls: number;
            guests: number;
            participants: number;
            category: number;
        };
        description: string;
        eventType: import("@prisma/client").$Enums.EventType;
        registrationType: import("@prisma/client").$Enums.RegistrationType;
        date: Date | null;
        recurringDates: Date[];
        venue: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            capacity: number | null;
        };
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
        };
        tickets: {
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            status: import("@prisma/client").$Enums.TicketStatus;
            qrCode: string;
            selectedDates: Date[];
            participantId: string | null;
        }[];
        stalls: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            eventId: string;
            status: import("@prisma/client").$Enums.StallStatus;
        }[];
        guests: {
            name: string;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            eventId: string;
        }[];
        participants: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            eventId: string;
            status: import("@prisma/client").$Enums.ParticipantStatus;
            ticketId: string | null;
        }[];
        venueId: string;
        userId: string;
        categoryId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
