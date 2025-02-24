import { RoleType } from '@prisma/client';
export declare class VerifyOTPDto {
    phoneNumber: string;
    otp: string;
    roleType: RoleType;
}
