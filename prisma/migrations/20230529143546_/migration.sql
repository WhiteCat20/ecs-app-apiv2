/*
  Warnings:

  - You are about to drop the column `remember_token` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `remember_token`,
    ADD COLUMN `refresh_token` VARCHAR(191) NULL;
