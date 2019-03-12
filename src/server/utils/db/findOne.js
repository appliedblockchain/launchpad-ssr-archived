const knex = require('../../knex')

const findOne = async (resourceName, id) => (
  knex.select().from(resourceName).where('id', id).limit(1)
)

module.exports = findOne
