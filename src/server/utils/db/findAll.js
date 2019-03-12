const knex = require('../../knex')

const findAll = async (resourceName) => (
  knex.select().from(resourceName)
)

module.exports = findAll
