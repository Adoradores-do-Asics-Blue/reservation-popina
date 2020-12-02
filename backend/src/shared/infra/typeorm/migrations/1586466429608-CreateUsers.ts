import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUsers1586466429608 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'restaurant',
            type: 'varchar',
            isNullable: true,
            default: 'false',
          },
          {
            name: 'whatsapp',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'openingHours',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'finishingHours',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'qtdAppointments',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
