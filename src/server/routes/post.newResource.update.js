import knex from "../knex"
import findResource from '../utils/db/findResource'

const updateNewResource = (resource, id, params) => {
  const record = knex(resource).where('id', id).limit(1)
  return record.update(
    params
  )
}

const newResourceUpdate = async (ctx) => {
  const urlParams = ctx.params
  const postParams = ctx.request.body
  const id = urlParams[0]
  const resource = await findResource('newresource', id)
  console.log("id:", id)
  console.log("resource:", resource)

  const params = {
    name: postParams.name,
    description: postParams.description,
  }
  console.log("new params:", params)
  await updateNewResource('newresource', id, params)
  console.log("Resource Updated!")
  ctx.redirect(`/newresource`)
}

export default newResourceUpdate
