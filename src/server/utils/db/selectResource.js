const knex = require('../../knex')

const selectResource = async (resourceName) => (
  knex.select().from(resourceName).orderBy('updated_at', 'desc')
)

module.exports = selectResource
