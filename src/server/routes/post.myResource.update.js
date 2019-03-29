import knex from '../knex'
import findOne from '../modules/db/findOne'
import Joi from 'joi'

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

  if (await findOne('myresource', id)) {
    const params = {
      name: postParams.name,
      description: postParams.description
    }

    await Joi. validate(params, Joi.object({
      name: Joi.string().required(),
      description: Joi.string().allow('').required()
    }))

    await updateMyResource('myresource', id, params)
  }

  ctx.redirect('/myresource')
}

export default myResourceUpdate
