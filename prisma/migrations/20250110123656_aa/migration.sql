-- CreateTable
CREATE TABLE `User` (
    `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `nickname` VARCHAR(32) NOT NULL,
    `email` VARCHAR(127) NOT NULL,
    `passwd` VARCHAR(128) NULL,
    `profileimg` VARCHAR(250) NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Follow` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `star` MEDIUMINT UNSIGNED NOT NULL,
    `follower` MEDIUMINT UNSIGNED NOT NULL,

    INDEX `fk_Follow_follower`(`follower`),
    UNIQUE INDEX `uniq_Follow_star_follower`(`star`, `follower`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Camp` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(32) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `membercnt` TINYINT NOT NULL DEFAULT 0,
    `applystart` DATE NOT NULL,
    `applyend` DATE NOT NULL,
    `otdate` DATETIME(0) NOT NULL,
    `projectstart` DATE NOT NULL,
    `projectend` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Camper` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `camp` INTEGER UNSIGNED NOT NULL,
    `user` MEDIUMINT UNSIGNED NOT NULL,
    `jobrole` ENUM('FrontEnd', 'BackEnd', 'FullStack', 'PlanMaster', 'Designer') NULL,
    `job` VARCHAR(32) NOT NULL DEFAULT 'Baksoo',
    `location` VARCHAR(32) NOT NULL,
    `mobile` VARCHAR(13) NOT NULL,
    `name` VARCHAR(32) NOT NULL,
    `birthyear` YEAR NOT NULL,
    `gender` ENUM('Male', 'Female') NOT NULL,
    `portfolio` VARCHAR(255) NULL,
    `motive` VARCHAR(511) NOT NULL,
    `goal` VARCHAR(511) NOT NULL,
    `wantproject` VARCHAR(255) NULL,
    `introduce` VARCHAR(511) NOT NULL,

    INDEX `fk_Camper_camp`(`camp`),
    INDEX `fk_Camper_user`(`user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `camp` INTEGER UNSIGNED NOT NULL,
    `title` VARCHAR(50) NOT NULL,
    `state` ENUM('Ready', 'Ongoing', 'Completed', 'Drop') NOT NULL DEFAULT 'Ready',
    `titleimg` VARCHAR(127) NULL,
    `content` VARCHAR(1024) NOT NULL,
    `starter` INTEGER UNSIGNED NOT NULL,

    INDEX `fk_Project_starter_User`(`starter`),
    INDEX `fk_Project_camp`(`camp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projecter` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `project` SMALLINT UNSIGNED NOT NULL,
    `camper` INTEGER UNSIGNED NOT NULL,
    `duty` VARCHAR(255) NULL,

    INDEX `fk_Projecter_camper`(`camper`),
    UNIQUE INDEX `uniq_Projecter_project_camper`(`project`, `camper`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProjectTag` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `project` SMALLINT UNSIGNED NOT NULL,
    `tag` INTEGER UNSIGNED NOT NULL,

    INDEX `fk_ProjectTag_tag`(`tag`),
    UNIQUE INDEX `uniq_projet_tag`(`project`, `tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` SMALLINT UNSIGNED NOT NULL,
    `name` VARCHAR(16) NOT NULL,

    UNIQUE INDEX `uniq_Skill_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `tag` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `uniq_ProjectTag_tag`(`tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CampLover` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `callee` INTEGER UNSIGNED NOT NULL,
    `caller` INTEGER UNSIGNED NOT NULL,
    `accepted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `fk_TermMemberLover_caller_ProjectMember`(`caller`),
    UNIQUE INDEX `uniq_CampLover_callee_caller`(`callee`, `caller`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CamperSkill` (
    `id` INTEGER UNSIGNED NOT NULL,
    `camper` INTEGER UNSIGNED NOT NULL,
    `skill` SMALLINT UNSIGNED NOT NULL,

    INDEX `fk_CamperSkill_skill`(`skill`),
    INDEX `fk_CamperSkill_termMember`(`camper`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`star`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follow` ADD CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`follower`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Camper` ADD CONSTRAINT `camper_ibfk_1` FOREIGN KEY (`camp`) REFERENCES `Camp`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Camper` ADD CONSTRAINT `camper_ibfk_2` FOREIGN KEY (`user`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `project_ibfk_1` FOREIGN KEY (`camp`) REFERENCES `Camp`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `project_ibfk_2` FOREIGN KEY (`starter`) REFERENCES `Camper`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projecter` ADD CONSTRAINT `projecter_ibfk_1` FOREIGN KEY (`project`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projecter` ADD CONSTRAINT `projecter_ibfk_2` FOREIGN KEY (`camper`) REFERENCES `Camper`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTag` ADD CONSTRAINT `projecttag_ibfk_1` FOREIGN KEY (`project`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectTag` ADD CONSTRAINT `projecttag_ibfk_2` FOREIGN KEY (`tag`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CampLover` ADD CONSTRAINT `camplover_ibfk_1` FOREIGN KEY (`callee`) REFERENCES `Camper`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CampLover` ADD CONSTRAINT `camplover_ibfk_2` FOREIGN KEY (`caller`) REFERENCES `Projecter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CamperSkill` ADD CONSTRAINT `termmemberskill_ibfk_1` FOREIGN KEY (`camper`) REFERENCES `Camper`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CamperSkill` ADD CONSTRAINT `termmemberskill_ibfk_2` FOREIGN KEY (`skill`) REFERENCES `Skill`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
