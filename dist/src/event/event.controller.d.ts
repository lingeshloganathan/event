import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { _User } from 'src/interface';
import { FilterEventDto } from './dto/filter-event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(input: CreateEventDto, user: _User): Promise<{
        message: string;
        data: {
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
        };
    }>;
    findAll(query: FilterEventDto): Promise<{
        message: string;
        data: {
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
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: {
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
        };
    }>;
    update(id: string, input: UpdateEventDto): Promise<{
        message: string;
        data: {
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
        };
    }>;
    remove(id: string): Promise<{
        message: string;
        data: {
            id: string;
        };
    }>;
}
