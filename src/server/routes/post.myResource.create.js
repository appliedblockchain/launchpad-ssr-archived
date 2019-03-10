import knex from '../knex'
import resourcesCount from '../utils/db/resourcesCount'

const createMyResource = (params) => {
  return knex('myresource').insert({
    name: params.name
  })
}

const myResourceCreate = async (ctx) => {
  let count = await resourcesCount('myresource')
  const postParams = ctx.request.body
  const params = {
    name: postParams.name,
    description: postParams.description
  }
  console.log('Create resource - params:', params)
  console.log(`Resources count (${count})`)
  await createMyResource(params)
  console.log('Resource Created!')
  count = await resourcesCount('myresource')
  console.log(`Resources count (${count}) - after create`)
  ctx.redirect('/myresource')
}

export default myResourceCreate
