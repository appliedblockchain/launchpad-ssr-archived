const routes = require('../../shared/routes')
const selectResource = require('../utils/db/selectResource')
const Document = require('../../Document')
const currentSession = require('../utils/currentSession')

process.env.RAZZLE_ASSETS_MANIFEST = process.env.RAZZLE_ASSETS_MANIFEST || '../../../build/assets.json'
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const getRoute = async (ctx) => {
  const session = await currentSession(ctx)
  const { user } = session
  try {
    // const html = await render({
    //   req: ctx.req,
    //   res: ctx.res,
    //   routes,
    //   assets,
    //   document: Document,
    //   data: {
    //     users: await selectResource('users'),
    //     companies: await selectResource('companies'),
    //     myResource: await selectResource('myresource'),
    //     currentUser: user
    //   }
    // })
    const context = ctx
    context.body = html
  } catch (error) {
    console.error(error)
  }
}

module.exports = getRoute
