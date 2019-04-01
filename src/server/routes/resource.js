import knex from '../knex'
import Joi from 'joi'
import findOne from '../modules/db/findOne'

const _createResource = (params) => {
  return knex('myresource').insert({
    name: params.name,
    description: params.description
  })
}

export const createResource = async (ctx) => {
  const postParams = ctx.request.body
  const params = {
    name: postParams.name,
    description: postParams.description
  }
  await Joi. validate(params, Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
  }))

  await _createResource(params)

  ctx.redirect('/myresource')
}


const _deleteResource = async (resourceName, resource) => {
  const status = await knex(resourceName).where('id', resource.id).delete()
  return status
}

export const deleteResource = async (ctx) => {
  const urlParams = ctx.params
  const id = urlParams[0]

  const resource = await findOne('myresource', id)

  if (resource) {
    await _deleteResource('myresource', resource)
  }



  ctx.redirect('/myresource')
}

const _updateResource = (resource, id, params) => {
  const record = knex(resource).where('id', id).limit(1)
  return record.update(
    params
  )
}

export const updateResource = async (ctx) => {
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

    await _updateResource('myresource', id, params)
  }

  ctx.redirect('/myresource')
}

