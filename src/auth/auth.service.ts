import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { VerifyOTPDto } from './dto/verify-otp.dto';
import { sendOtpInputDto } from './dto/send-otp.dto';
import { UserSelect } from 'src/queryselect';

@Injectable()
export class AuthService {
  private otpStore = new Map<string, string>();

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async generateOTP(input: sendOtpInputDto) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    this.otpStore.set(input.phoneNumber, otp);
    console.log(`OTP for ${input.phoneNumber}: ${otp}`);
    return { message: 'OTP sent successfully', otp: `${otp}` };
  }

  async verifyOTP(input: VerifyOTPDto) {
    const storedOTP = this.otpStore.get(input.phoneNumber);
    if (!storedOTP || storedOTP !== input.otp) {
      throw new UnauthorizedException('Invalid OTP');
    }
    this.otpStore.delete(input.phoneNumber);
    let user = await this.prisma.user.findUnique({
      where: {
        phoneNumber: input.phoneNumber,
        recordStatus: { not: 'DELETED' },
      },
      select: UserSelect,
    });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          phoneNumber: input.phoneNumber,
          role: {
            connect: {
              name: input.roleType,
            },
          },
        },
        select: UserSelect,
      });
    }
    const payload = {
      userId: user.id,
      roleType: user.role?.name,
    };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
      }),
    };
  }
}
