import { TicketService } from './ticket.service';
import { TicketFilterDto, TicketQrCodeDto } from './dto/ticket-filter.dto';
import { _User } from 'src/interface';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    findAll(input: TicketFilterDto): Promise<{
        message: string;
        data: {
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
            };
            userId: string;
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
            participant: {
                name: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                eventId: string;
                status: import("@prisma/client").$Enums.ParticipantStatus;
                ticketId: string | null;
            } | null;
            eventId: string;
            status: import("@prisma/client").$Enums.TicketStatus;
            qrCode: string;
            selectedDates: Date[];
            participantId: string | null;
        }[];
    }>;
    findOne(id: string, user: _User): Promise<{
        message: string;
        data: {
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
            };
            userId: string;
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
            participant: {
                name: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                eventId: string;
                status: import("@prisma/client").$Enums.ParticipantStatus;
                ticketId: string | null;
            } | null;
            eventId: string;
            status: import("@prisma/client").$Enums.TicketStatus;
            qrCode: string;
            selectedDates: Date[];
            participantId: string | null;
        };
    }>;
    getQrCode(eventId: string, input: TicketQrCodeDto): Promise<{
        message: string;
        data: {
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
            };
            userId: string;
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
            participant: {
                name: string | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                eventId: string;
                status: import("@prisma/client").$Enums.ParticipantStatus;
                ticketId: string | null;
            } | null;
            eventId: string;
            status: import("@prisma/client").$Enums.TicketStatus;
            qrCode: string;
            selectedDates: Date[];
            participantId: string | null;
        };
    }>;
}
