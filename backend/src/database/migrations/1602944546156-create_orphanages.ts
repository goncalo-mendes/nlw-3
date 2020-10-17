import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602944546156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      //REALIZER ALTERAÇÕES
      //CRIAR TABELA, CRIAR CAMPO NOVO E DELETAR ALGO
      await queryRunner.createTable(new Table({
        name: 'orphanages',
        columns: [
          {
            name:'id',
            type: 'interger',
            unsigned: true,
            isPrimary:true,
            isGenerated:true,
            generationStrategy: 'increment',
          },
          {
            name:'name',
            type: 'varchar'
          },
          {
            name:'latitude',
            type: 'decimal',
            scale: 10,
            precision: 2,
          },
          {
            name: 'about',
            type: 'text'
          },
          {
            name:'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'open_on_weekends',
            type: 'text',
            default: false,
          },
        ]
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      //DESFAZER O QUE FOI FEITO UP
    await queryRunner.dropTable('orphanages')
  }

}
