import { CategoryService } from './category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<{
        message: string;
        data: {
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
        }[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        data: {
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
        };
    }>;
}
