import knex from '../../knex'

const findOneBy = async (resourceName, field, value) => {
  const results = await knex.select().from(resourceName).where(field, value).limit(1)

  if (results.length) {
    return results[0]
  }

  return null
}


export default findOneBy
