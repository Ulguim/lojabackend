exports.up = function (knex) {
    return knex.schema.createTable("gravadoras", (table) => {
        table.increments();
        table.string("nome", 60).notNullable();
        table.string("contato", 60).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("gravadoras");
};
