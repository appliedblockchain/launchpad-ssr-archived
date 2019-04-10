import knex from '../../knex'

const selectResource = async (resourceName) => (
  knex.select().from(resourceName).orderBy('updated_at', 'desc')
)

export default selectResource
