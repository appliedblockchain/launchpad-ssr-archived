const knex = require('../../knex')

const resourcesCount = async (resourceName) => {
  let count = await knex(resourceName).count('id')
  count = count[0].count
  return count
}

module.exports = resourcesCount
