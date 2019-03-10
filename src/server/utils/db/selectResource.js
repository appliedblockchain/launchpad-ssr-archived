import knex from "../../knex"

const selectResource = async (resource) => (
  knex.select().from(resource)
)

export default selectResource
