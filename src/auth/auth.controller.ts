import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { sendOtpInputDto } from './dto/send-otp.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('send-otp')
  async sendOTP(@Body() input: sendOtpInputDto) {
    return this.authService.generateOTP(input);
  }

  @Post('verify-otp')
  async verifyOTP(@Body() verifyOTPDto: VerifyOTPDto) {
    const accessToken = await this.authService.verifyOTP(verifyOTPDto);
    return {
      message: 'OTP verified successfully',
      data: { accessToken },
    };
  }
}
