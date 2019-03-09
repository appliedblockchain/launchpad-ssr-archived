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

  await knex.schema.createTable("newresource", t => {
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

}

exports.down = async knex => {
  await knex.schema.dropTableIfExists("users")
  await knex.schema.dropTableIfExists("user_role")
  await knex.schema.dropTableIfExists("companies")
  await knex.schema.dropTableIfExists("events")
  await knex.schema.dropTableIfExists("documents")
  await knex.schema.dropTableIfExists("vessels")
}
