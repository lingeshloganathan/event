import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { FilterParticipantDto } from './dto/filter-dto';
import { _User } from 'src/interface';
export declare class ParticipantController {
    private readonly participantService;
    constructor(participantService: ParticipantService);
    create(input: CreateParticipantDto, user: _User): Promise<{
        message: string;
        data: {
            name: string | null;
            id: string;
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
            ticket: {
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
            } | null;
            eventId: string;
            status: import("@prisma/client").$Enums.ParticipantStatus;
            ticketId: string | null;
        };
    }>;
    findAll(input: FilterParticipantDto): Promise<{
        message: string;
        data: {
            name: string | null;
            id: string;
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
            ticket: {
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
            } | null;
            eventId: string;
            status: import("@prisma/client").$Enums.ParticipantStatus;
            ticketId: string | null;
        }[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: {
            name: string | null;
            id: string;
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
            ticket: {
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
            } | null;
            eventId: string;
            status: import("@prisma/client").$Enums.ParticipantStatus;
            ticketId: string | null;
        };
    }>;
}
