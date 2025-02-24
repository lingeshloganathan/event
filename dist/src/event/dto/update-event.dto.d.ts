import { EventType, RegistrationType } from '@prisma/client';
export declare class UpdateEventDto {
    name: string;
    description: string;
    eventType: EventType;
    registrationType: RegistrationType;
    venueId: string;
}
