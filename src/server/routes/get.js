import routes from '../../shared/routes'
import selectResource from '../utils/db/selectResource'
import { render } from '@jaredpalmer/after'
import Document from '../../Document'
import currentSession from '../utils/currentSession'
import getVersion from '../utils/version'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const getRoute = async (ctx) => {
  assets.version = await getVersion()
  const session = await currentSession(ctx)
  const { user } = session


  if (!user && !ctx.req.url.startsWith('/login')) {
    ctx.redirect('/login')
    return
  }

  try {
    const html = await render({
      req: ctx.req,
      res: ctx.res,
      routes,
      assets,
      document: Document,
      data: {
        contractValue: await ctx.contracts.HelloWorld.methods.getHelloWorld().call(),
        users: await selectResource('users'),
        companies: await selectResource('companies'),
        myResource: await selectResource('myresource'),
        currentUser: user
      }
    })
    const context = ctx
    context.body = html
  } catch (error) {
    console.error(error)
  }
}

export default getRoute
