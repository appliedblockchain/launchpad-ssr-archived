import knex from "../../knex"

const selectResource = async (resource) => (
  knex.select().from(resource).orderBy('updated_at', "desc")
)

export default selectResource
