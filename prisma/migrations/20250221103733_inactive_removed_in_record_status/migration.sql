/*
  Warnings:

  - The values [INACTIVE] on the enum `RecordStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RecordStatus_new" AS ENUM ('ACTIVE', 'DELETED');
ALTER TABLE "Category" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "Event" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "Guest" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "Permission" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "Role" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "Stall" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "Ticket" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "Venue" ALTER COLUMN "recordStatus" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Role" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Permission" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Category" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Event" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Venue" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Ticket" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Guest" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TABLE "Stall" ALTER COLUMN "recordStatus" TYPE "RecordStatus_new" USING ("recordStatus"::text::"RecordStatus_new");
ALTER TYPE "RecordStatus" RENAME TO "RecordStatus_old";
ALTER TYPE "RecordStatus_new" RENAME TO "RecordStatus";
DROP TYPE "RecordStatus_old";
ALTER TABLE "Category" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "Event" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "Guest" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "Permission" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "Role" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "Stall" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "Ticket" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "User" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
ALTER TABLE "Venue" ALTER COLUMN "recordStatus" SET DEFAULT 'ACTIVE';
COMMIT;
