import {MigrationInterface, QueryRunner} from "typeorm";

export class user1575777647616 implements MigrationInterface {
    name = 'user1575777647616'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `iphone` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `iphone`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `iphone` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `iphone`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `iphone` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` CHANGE `iphone` `name` varchar(255) NOT NULL", undefined);
    }

}
