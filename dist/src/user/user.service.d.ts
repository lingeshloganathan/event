import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findOne(id: string): Promise<{
        name: string | null;
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        phoneNumber: string;
        email: string | null;
        gender: import("@prisma/client").$Enums.Gender | null;
        roleId: string | null;
    }>;
    update(id: string, input: UpdateUserDto): Promise<{
        name: string | null;
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
            role: number;
            events: number;
            tickets: number;
            stalls: number;
            participants: number;
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
        role: {
            name: import("@prisma/client").$Enums.RoleType;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        phoneNumber: string;
        email: string | null;
        gender: import("@prisma/client").$Enums.Gender | null;
        roleId: string | null;
    }>;
}
