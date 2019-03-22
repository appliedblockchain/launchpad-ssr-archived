import knex from '../knex'
import findOne from '../utils/db/findOne'

const deleteResource = async (resourceName, resource) => {
  const status = await knex(resourceName).where('id', resource.id).delete()
  return status
}

const myResourceDelete = async (ctx) => {
  const urlParams = ctx.params
  const id = urlParams[0]

  let resource = await findOne('myresource', id)
  resource = resource[0]

  await deleteResource('myresource', resource)

  ctx.redirect('/myresource')
}

export default myResourceDelete
