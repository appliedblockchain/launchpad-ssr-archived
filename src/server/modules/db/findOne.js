import knex from '../../knex'

const findOne = async (resourceName, id) => {
  const result = await knex.select().from(resourceName).where('id', id).limit(1)

  return result[0] ? result[0] : null
}

export default findOne
