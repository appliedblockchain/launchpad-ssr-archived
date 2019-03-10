import routes from '../../shared/routes'
import selectResource from '../utils/db/selectResource'
import { render } from '@jaredpalmer/after'
import Document from '../../Document'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const getRoute = async (ctx) => {
  try {
    const html = await render({
      req: ctx.req,
      res: ctx.res,
      routes,
      assets,
      document: Document,
      data: {
        users: await selectResource('users'),
        companies: await selectResource('companies'),
        myResource: await selectResource('myresource')
      }
    })
    ctx.body = html
  } catch (error) {
    console.error(error)
  }
}

export default getRoute
