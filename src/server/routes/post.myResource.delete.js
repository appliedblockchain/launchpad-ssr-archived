import knex from "../knex"
import resourcesCount from "../utils/db/resourcesCount"
import findResource from '../utils/db/findResource'

const deleteResource = async (resourceName, resource) => {
  const status = await knex(resourceName).where('id', resource.id).delete()
  return status
}

const myResourceDelete = async (ctx) => {
  const urlParams = ctx.params
  const postParams = ctx.request.body
  const id = urlParams[0]
  console.log("ID", id)
  let resource = await findResource('myresource', id)
  resource = resource[0]
  let count = await resourcesCount()
  console.log(`Resources count (${count})`)
  console.log("Delete resource - id:", id)
  await deleteResource('myresource', resource)
  console.log("Resource Deleted!")
  count = await resourcesCount()
  console.log(`Resources count (${count}) - after delete`)
  ctx.redirect('/myresource')
}

export default myResourceDelete
