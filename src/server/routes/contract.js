import Joi from 'joi'

const updateContractValue = async ctx => {
  const { message } = ctx.request.body

  const params = {
    message
  }

  await Joi. validate(params, Joi.object({
    message: Joi.string().required()
  }))

  await ctx
    .contracts
    .HelloWorld
    .methods
    .updateHelloWorld(params.message)
    .send(ctx.sendParams)

  ctx.redirect('/contract')
}

export default updateContractValue

