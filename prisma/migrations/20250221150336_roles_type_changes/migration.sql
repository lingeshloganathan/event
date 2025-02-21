/*
  Warnings:

  - The values [VENDOR] on the enum `RoleType` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleType_new" AS ENUM ('ADMIN', 'EVENT_VENDOR', 'SUPERVISOR', 'ATTENDEE', 'STALL_VENDOR', 'COORDINATOR');
ALTER TABLE "Role" ALTER COLUMN "name" TYPE "RoleType_new" USING ("name"::text::"RoleType_new");
ALTER TYPE "RoleType" RENAME TO "RoleType_old";
ALTER TYPE "RoleType_new" RENAME TO "RoleType";
DROP TYPE "RoleType_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");
