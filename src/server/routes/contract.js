import Joi from 'joi'

const updateContractValue = async (ctx) => {
  const postParams = ctx.request.body

  const params = {
    message: postParams.message
  }

  await Joi. validate(params, Joi.object({
    message: Joi.string().required()
  }))

  await ctx.contracts.HelloWorld.methods.updateHelloWorld(params.message).send(ctx.sendParams)

  ctx.redirect('/contract')
}

export default updateContractValue

