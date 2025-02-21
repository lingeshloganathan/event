-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "date" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Participant" ALTER COLUMN "name" DROP NOT NULL;
