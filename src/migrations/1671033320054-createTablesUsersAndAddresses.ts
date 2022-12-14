import { MigrationInterface, QueryRunner } from "typeorm";

export class createTablesUsersAndAddresses1671033320054 implements MigrationInterface {
    name = 'createTablesUsersAndAddresses1671033320054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "birthDate" TIMESTAMP NOT NULL, "image" character varying NOT NULL, "email" character varying(150) NOT NULL, "phone" character varying(11) NOT NULL, "password" character varying NOT NULL, "cpf" character varying(11) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isSeller" boolean NOT NULL DEFAULT false, "bio" character varying(150) NOT NULL, "addressId" uuid, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "REL_bafb08f60d7857f4670c172a6e" UNIQUE ("addressId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "country" character varying(50) NOT NULL, "state" character varying(15) NOT NULL, "city" character varying(50) NOT NULL, "cep" character varying(9) NOT NULL, "street" character varying(50) NOT NULL, "number" character varying(50), "complement" character varying(50), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_bafb08f60d7857f4670c172a6ea"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
