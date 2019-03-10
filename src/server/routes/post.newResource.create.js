import knex from "../knex"
import resourcesCount from "../utils/db/resourcesCount"

const createNewResource = (params) => {
  return knex('newresource').insert({
    name: params.name
  })
}

const newResourceCreate = async (ctx) => {
  let count = await resourcesCount()
  const postParams = ctx.request.body
  const params = {
    name: postParams.name,
    description: postParams.description,
  }
  console.log("Create resource - params:", params)
  console.log(`Resources count (${count})`)
  await createNewResource(params)
  console.log("Resource Created!")
  count = await resourcesCount()
  console.log(`Resources count (${count}) - after create`)
  ctx.redirect('/newresource')
}

export default newResourceCreate
