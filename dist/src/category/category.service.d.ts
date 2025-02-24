import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        name: string;
        parentId: string | null;
        subcategories: {
            name: string;
            parentId: string | null;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        }[];
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        parent: {
            name: string;
            parentId: string | null;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        } | null;
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
            parent: number;
            subcategories: number;
            events: number;
        };
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        parentId: string | null;
        subcategories: {
            name: string;
            parentId: string | null;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        }[];
        id: string;
        recordStatus: import("@prisma/client").$Enums.RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        parent: {
            name: string;
            parentId: string | null;
            id: string;
            recordStatus: import("@prisma/client").$Enums.RecordStatus;
            createdAt: Date;
            updatedAt: Date;
        } | null;
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
            parent: number;
            subcategories: number;
            events: number;
        };
    }>;
}
