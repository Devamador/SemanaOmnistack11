//responsavel pela criação da tabela. O que vai acontecer quando eu executar essa migration
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf',2).notNullable();
  })
};
//se der algum problema o que eu tenho que fazer/ desfazer.
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
