import { EventType, RegistrationType } from '@prisma/client';
export declare class FilterEventDto {
    registrationType: RegistrationType;
    eventType: EventType;
    venueId: string;
}
