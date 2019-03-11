import knex from '../knex'
import resourcesCount from '../utils/db/resourcesCount'
import findOne from '../utils/db/findOne'

const deleteResource = async (resourceName, resource) => {
  const status = await knex(resourceName).where('id', resource.id).delete()
  return status
}

const myResourceDelete = async (ctx) => {
  const urlParams = ctx.params
  const id = urlParams[0]
  console.log('ID', id)
  let resource = await findOne('myresource', id)
  resource = resource[0]
  let count = await resourcesCount('myresource')
  console.log(`Resources count (${count})`)
  console.log('Delete resource - id:', id)
  await deleteResource('myresource', resource)
  console.log('Resource Deleted!')
  count = await resourcesCount('myresource')
  console.log(`Resources count (${count}) - after delete`)
  ctx.redirect('/myresource')
}

export default myResourceDelete
