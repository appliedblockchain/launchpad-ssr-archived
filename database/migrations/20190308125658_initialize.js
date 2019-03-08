exports.up = async knex => {
  await knex.schema.createTable('users', t => {
    t.increments('id')
    t.string('email')
    t.string('name')
    t.string('password')
    t.timestamps(false, true)
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('users')
};
