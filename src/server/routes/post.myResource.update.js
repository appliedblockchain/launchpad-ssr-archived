import knex from '../knex'
import findOne from '../utils/db/findOne'

const updateMyResource = (resource, id, params) => {
  const record = knex(resource).where('id', id).limit(1)
  return record.update(
    params
  )
}

const myResourceUpdate = async (ctx) => {
  const urlParams = ctx.params
  const postParams = ctx.request.body
  const id = urlParams[0]
  const resource = await findOne('myresource', id)
  console.log('id:', id)
  console.log('resource:', resource)

  const params = {
    name: postParams.name,
    description: postParams.description
  }
  console.log(`new params came in - (name: ${params.name}`)
  await updateMyResource('myresource', id, params)
  console.log('Resource Updated!')
  ctx.redirect('/myresource')
}

export default myResourceUpdate
