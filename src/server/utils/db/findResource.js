import knex from "../../knex"

const findResource = async (resourceName, id) => (
  knex.select().from(resourceName).where('id', id).limit(1)
)

export default findResource
