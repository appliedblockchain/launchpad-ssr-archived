exports.up = async knex => {

  await knex.schema.createTable("user_role", t => {
    t.increments("id").primary()
    t.string("name").notNullable()
    t.timestamps(false, true)
  })

  await knex.schema.createTable("companies", t => {
    t.increments("id").primary()
    t.string("name").notNullable()
    t.timestamps(false, true)
  })

  await knex.schema.createTable("users", t => {
    t.increments("id").primary()
    t.string("name")
    t.string("email")
      .unique()
      .notNullable()
    t.string("phone")
    t.string("password").notNullable()
    t.string("location")
    t.integer("role_id")
      .references("id")
      .inTable("user_role")
    t.integer("company_id")
      .references("id")
      .inTable("companies")
    t.timestamps(false, true)
  })

  return

  await knex.schema.createTable("events", t => {
    t.increments("id").primary()
    t.string("title")
    t.text("descrition")
    t.string("location")
    t.timestamp("start")
    t.timestamp("ends")
    t.string("notes")
    t.string("notes")
    t.json("guests")
      .references("id")
      .inTable("users")
    t.integer("created_by")
      .references("id")
      .inTable("users")
    t.boolean("private")
    t.timestamps(false, true)
  })

  await knex.schema.createTable("documents", t => {
    t.increments("id").primary()
    t.string("filename")
    t.string("type")
    t.integer("receiver")
      .references("id")
      .inTable("users")
    t.string("origin")
    t.string("eta")
    t.text("description")
    t.integer("created_by")
      .references("id")
      .inTable("users")
    t.enu("status", ["incomming", "sent"]).defaultTo("incomming")
    t.timestamps(false, true)
  })

  await knex.createTable("vessels", t => {
    t.increments("id").primary()
    t.string("name")
    t.timestamp("eta")
    t.string("block")
    t.string("comm")
    t.string("so")
    t.text("description")
    t.enu('status',['incoming, delayed']).defaultTo('incomming')
    t.timestamp(false, true)
  })
}

exports.down = async knex => {
  await knex.schema.dropTableIfExists("users")
  await knex.schema.dropTableIfExists("user_role")
  await knex.schema.dropTableIfExists("companies")
  await knex.schema.dropTableIfExists("events")
  await knex.schema.dropTableIfExists("documents")
  await knex.schema.dropTableIfExists("vessels")
}
