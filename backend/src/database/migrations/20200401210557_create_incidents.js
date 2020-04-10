exports.up = function(knex) {
  return knex.schema.createTable("incidents", function(table) {
    table.increments(); // faz o id incremental, 1,2,3,4... Primary Key

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("ong_id").notNullable();

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
