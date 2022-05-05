exports.up = function (knex) {
    return knex.schema.createTable("albuns", (table) => {
        table.increments();
        table.string("titulo", 60).notNullable();
        table.string("Cantor", 40).notNullable();
        table.string("ano", 4).notNullable();
        table.decimal("vendas",10.2).notNullable();
        table.integer("gravadora_id").notNullable().unsigned();
        table.foreign("gravadora_id").references("gravadoras.id")
        .onDelete("restrict").onUpdate("cascade");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("albuns");
};
