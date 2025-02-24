import { AuthService } from './auth.service';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { sendOtpInputDto } from './dto/send-otp.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    sendOTP(input: sendOtpInputDto): Promise<{
        message: string;
        otp: string;
    }>;
    verifyOTP(verifyOTPDto: VerifyOTPDto): Promise<{
        message: string;
        data: {
            accessToken: {
                accessToken: string;
            };
        };
    }>;
}
