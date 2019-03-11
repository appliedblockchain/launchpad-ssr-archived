import knex from '../../knex'

const findAll = async (resourceName) => (
  knex.select().from(resourceName)
)

export default findAll
