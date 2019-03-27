import Koa from 'koa'
import Router from 'koa-router'
import statics from 'koa-static'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaSession from 'koa-session2'
import getRoute from './routes/get'
import sessionsCreate from './routes/post.sessions.create'
import sessionsDestroy from './routes/get.sessions.delete'
import myResourceCreate from './routes/post.myResource.create'
import myResourceUpdate from './routes/post.myResource.update'
import myResourceDelete from './routes/post.myResource.delete'
import contractUpdate from './routes/post.contract'
import { contracts, web3 } from './utils/web3'
import currentSession from './utils/currentSession'
import assignToContext from './middleware/assignToContext'

// TODO: config
// create a config file for this secret
// next step - hook up kms (or vault-proxy) and use the vault url/hash
//
const SESSION_SECRET_KEY = '85889f1d6f515a578e0e52f443931eb9'

const server = new Koa()
const router = new Router()

// main routes

// auth
router.post('/sessions/create', sessionsCreate)
router.get('/logout', sessionsDestroy)

// myResource
router.post('/myresource', myResourceCreate)
router.post('/myresource/*/update', myResourceUpdate)
router.post('/myresource/*/delete', myResourceDelete)
router.post('/contract', contractUpdate)

// get routes
router.get('/*', getRoute)

// application server
server
  .use(helmet())
  .use(assignToContext({ contracts, web3 }))
  .use(statics(process.env.RAZZLE_PUBLIC_DIR))
  .use(koaSession({
    key: SESSION_SECRET_KEY
  }))
  .use(bodyParser())
  .use(logger())
  .use(async (ctx, next) => {
    const session = await currentSession(ctx)
    const { user } = session

    if (ctx.request.method === 'GET') {
      if (!user && !ctx.req.url.startsWith('/login')) {
        ctx.redirect(`/login?redirect=${ctx.req.url}`)
        return
      }

      if (user && ctx.req.url.startsWith('/login')) {
        ctx.redirect('/')
        return
      }
    } else if (ctx.req.url !== '/sessions/create') {
      ctx.redirect(`/login?message=${encodeURIComponent('Please login first')}`)
    }

    await next()

  })
  .use(router.routes())
  .use(router.allowedMethods())

export default server
