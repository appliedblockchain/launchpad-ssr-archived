import knex from '../knex'
import findOne from '../modules/db/findOne'

const deleteResource = async (resourceName, resource) => {
  const status = await knex(resourceName).where('id', resource.id).delete()
  return status
}

const myResourceDelete = async (ctx) => {
  const urlParams = ctx.params
  const id = urlParams[0]

  const resource = await findOne('myresource', id)

  if (resource) {
    await deleteResource('myresource', resource)
  }



  ctx.redirect('/myresource')
}

export default myResourceDelete
