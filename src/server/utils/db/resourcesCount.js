import knex from "../../knex"

const resourcesCount = async (resourceName) => {
  let count = await knex(resourceName).count('id')
  count = count[0].count
  return count
}

export default resourcesCount
