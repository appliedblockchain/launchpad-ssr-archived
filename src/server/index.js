import Koa from 'koa'
import Router from 'koa-router'
import statics from 'koa-static'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import koaSession from 'koa-session2'
import getRoute from './routes/get'
import sessionsCreate from './routes/post.sessions.create'
import myResourceCreate from './routes/post.myResource.create'
import myResourceUpdate from './routes/post.myResource.update'
import myResourceDelete from './routes/post.myResource.delete'
import contractUpdate from './routes/post.contract'
import { contracts, web3 } from './utils/web3'

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
  .use(async (ctx, next) => {
    const env = process['env']
    const sendParams = {
      from: env.FROM || '0x1F2e5282481C07BC8B7b07E53Bc3EF6A8012D6b7',
      gas: env.gas || '500000',
      gasPrice: env.gasPrice || '0'
    }

    Object.assign(ctx, { contracts, web3, sendParams })
    await next()
  })
  .use(statics(process.env.RAZZLE_PUBLIC_DIR))
  .use(koaSession({
    key: SESSION_SECRET_KEY
  }))
  .use(bodyParser())
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())

export default server
