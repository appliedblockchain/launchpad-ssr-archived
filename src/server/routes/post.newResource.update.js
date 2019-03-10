import knex from "../knex"
import findResource from '../utils/db/findResource'

const updateNewResource = (params) => {
  return findResource('users', id).update(
    params
  )
}

const newResourceUpdate = async (ctx) => {
  const urlParams = ctx.params
  const postParams = ctx.request.body
  const id = urlParams.id
  console.log("---> ID", id)
  const resource = await findResource('users', id)

  const params = {
    name: postParams.name,
    description: postParams.description,
  }
  console.log("Update resource - params:", params)
  await updateNewResource(params)
  console.log("Resource Created!")
  ctx.redirect(`/newresource/${id}`)
}

export default newResourceUpdate
