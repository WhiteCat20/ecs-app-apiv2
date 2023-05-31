/*
  Warnings:

  - Added the required column `status_absen` to the `AbsenAgenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absenagenda` ADD COLUMN `status_absen` ENUM('sendiri', 'diabsenkan') NOT NULL;
