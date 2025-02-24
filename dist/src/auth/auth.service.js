"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const queryselect_1 = require("../queryselect");
let AuthService = class AuthService {
    prisma;
    jwtService;
    otpStore = new Map();
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async generateOTP(input) {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        this.otpStore.set(input.phoneNumber, otp);
        console.log(`OTP for ${input.phoneNumber}: ${otp}`);
        return { message: 'OTP sent successfully', otp: `${otp}` };
    }
    async verifyOTP(input) {
        const storedOTP = this.otpStore.get(input.phoneNumber);
        if (!storedOTP || storedOTP !== input.otp) {
            throw new common_1.UnauthorizedException('Invalid OTP');
        }
        this.otpStore.delete(input.phoneNumber);
        let user = await this.prisma.user.findUnique({
            where: {
                phoneNumber: input.phoneNumber,
                recordStatus: { not: 'DELETED' },
            },
            select: queryselect_1.UserSelect,
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
                select: queryselect_1.UserSelect,
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map