/*
  Warnings:

  - Added the required column `agendaId` to the `AbsenAgenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `absenagenda` ADD COLUMN `agendaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `AbsenAgenda` ADD CONSTRAINT `AbsenAgenda_agendaId_fkey` FOREIGN KEY (`agendaId`) REFERENCES `Agenda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
