/*
  Warnings:

  - You are about to drop the column `nama_asisen` on the `absenagenda` table. All the data in the column will be lost.
  - Added the required column `nama_asisten` to the `AbsenAgenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absenagenda` DROP COLUMN `nama_asisen`,
    ADD COLUMN `nama_asisten` VARCHAR(191) NOT NULL;
