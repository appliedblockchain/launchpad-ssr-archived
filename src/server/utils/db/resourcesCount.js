import knex from "../../knex"

const resourcesCount = async () => {
  let count = await knex('myresource').count('id')
  count = count[0].count
  return count
}

export default resourcesCount
