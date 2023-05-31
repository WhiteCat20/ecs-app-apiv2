-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_userPreferencesId_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `userPreferencesId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_userPreferencesId_fkey` FOREIGN KEY (`userPreferencesId`) REFERENCES `userPreferences`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
