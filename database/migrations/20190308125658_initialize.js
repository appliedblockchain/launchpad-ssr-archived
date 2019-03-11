exports.up = async knex => {
  await knex.schema.createTable("users", t => {
    t.increments("id")
    t.string("name");
    t.string("email")
      .unique()
      .notNullable();
    t.string("phone");
    t.string("password").notNullable();
    t.string("location");
    t.timestamps(false, true);
  });

  await knex.schema.createTable("user_role", t => {
    t.increments("id")
    t.string("name").notNullable();
    t.timestamps(false, true);
  });

  await knex.schema.createTable("company_name", t => {
    t.increments("id")
    t.string("name").notNullable();
    t.timestamps(false, true);
  });

  await knex.schema.createTable("events", t => {
    t.increments("id")
    t.string("title");
    t.text("description");
    t.string("location");
    t.timestamp("start");
    t.timestamp("ends");
    t.string("notes");
    t.boolean("private");
    t.timestamps(false, true);
  });

  await knex.schema.createTable("documents", t => {
    t.increments("id")
    t.string("filename");
    t.string("type");
    t.string("origin");
    t.timestamp("eta");
    t.text("description");
    t.enu("status", ["incoming", "sent"]).defaultTo("incoming");
    t.timestamps(false, true);
  });

  await knex.schema.createTable("vessels", t => {
    t.increments("id")
    t.string("name");
    t.timestamp("eta");
    t.string("block");
    t.string("comm");
    t.string("so");
    t.text("description");
    t.enu("status", ["incoming", "delayed"]).defaultTo("incoming")
    t.timestamps(false, true);
  });

  await knex.schema.table("users", t => {
    t.integer("role")
      .references("id")
      .inTable("user_role");
    t.integer("company")
      .references("id")
      .inTable("company_name");
  });

  await knex.schema.table("events", t => {
    t.integer("guest")
      .references("id")
      .inTable("users");
    t.integer("created_by")
      .references("id")
      .inTable("users");
  });

  await knex.schema.table("documents", t => {
    t.integer("receiver")
      .references("id")
      .inTable("users");
    t.integer("created_by")
      .references("id")
      .inTable("users");
  });
};

exports.down = async knex => {
  await knex.schema.table("users", t => {
    t.dropForeign("role");
    t.dropForeign("company");
  })

  await knex.schema.table("events", t => {
    t.dropForeign("guest");
    t.dropForeign("created_by");
  })

  await knex.schema.table("documents", t => {
    t.dropForeign("receiver");
    t.dropForeign("created_by");
  })

  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("user_role");
  await knex.schema.dropTableIfExists("company_name");
  await knex.schema.dropTableIfExists("events");
  await knex.schema.dropTableIfExists("documents");
  await knex.schema.dropTableIfExists("vessels");
};
