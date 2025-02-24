import { PrismaService } from 'src/prisma/prisma.service';
export declare class CronService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateTicketStatus(): Promise<void>;
}
