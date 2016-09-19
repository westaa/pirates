exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('poison').notNullable();
    table.string('accessory').notNullable();
    table.string('image_url').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
