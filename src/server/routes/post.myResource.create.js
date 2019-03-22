import knex from '../knex'
import Joi from 'joi'

const createMyResource = (params) => {
  return knex('myresource').insert({
    name: params.name,
    description: params.description
  })
}

const createRessourceHandler = async (ctx) => {
  const postParams = ctx.request.body
  const params = {
    name: postParams.name,
    description: postParams.description
  }
  await Joi. validate(params, Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
  }))

  await createMyResource(params)

  ctx.redirect('/myresource')
}

export default createRessourceHandler

