import { EventType, RegistrationType } from '@prisma/client';
export declare class CreateEventDto {
    name: string;
    description: string;
    eventType: EventType;
    registrationType: RegistrationType;
    date: string;
    customDates: string[];
    recurringDays: string[];
    startDate: string;
    endDate: string;
    annualYearsCount: number;
    venueId: string;
    categoryId: string;
}
