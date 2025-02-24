import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { sendOtpInputDto } from './dto/send-otp.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    private otpStore;
    constructor(prisma: PrismaService, jwtService: JwtService);
    generateOTP(input: sendOtpInputDto): Promise<{
        message: string;
        otp: string;
    }>;
    verifyOTP(input: VerifyOTPDto): Promise<{
        accessToken: string;
    }>;
}
