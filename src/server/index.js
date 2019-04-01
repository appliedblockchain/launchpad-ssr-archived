import Koa from 'koa'
import statics from 'koa-static'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import { contracts, web3 } from './utils/web3'
import middleware from './middleware'
import redisStore from 'koa-redis'

import router from './routes'


const server = new Koa()
// TODO: config
// create a config file for this secret
// next step - hook up kms (or vault-proxy) and use the vault url/hash

server.keys = [ '85889f1d6f515a578e0e52f443931eb9' ]

const env = process['env']

// application server
server
  .use(helmet())
  .use(middleware.assignToContext({ contracts, web3 }))
  .use(statics(env.RAZZLE_PUBLIC_DIR))
  .use(session({
    store: redisStore({
      host: env.REDIS_HOST || 'localhost'
    })
  }, server))
  .use(bodyParser())
  .use(logger())
  .use(middleware.checkLoggedIn)
  .use(router.routes())
  .use(router.allowedMethods())

export default server
