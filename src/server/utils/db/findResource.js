import knex from "../../knex"

const findResource = async (resource, id) => (
  knex.select().from(resource).where('id', id).limit(1)
)

export default findResource
