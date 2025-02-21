/*
  Warnings:

  - A unique constraint covering the columns `[ticketId]` on the table `Participant` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[participantId]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "RecordStatus" ADD VALUE 'INACTIVE';

-- AlterTable
ALTER TABLE "Participant" ADD COLUMN     "ticketId" TEXT,
ALTER COLUMN "status" SET DEFAULT 'CONFIRMED';

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "participantId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Participant_ticketId_key" ON "Participant"("ticketId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_participantId_key" ON "Ticket"("participantId");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
