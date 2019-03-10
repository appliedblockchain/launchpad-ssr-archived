import Koa from 'koa'
import Router from 'koa-router'
import statics from 'koa-static'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
// import redis from 'koa-redis'
// WIP - sessions
// 'koa-session' - tried - it's not very good
// import session from 'koa-generic-session'
// import redis from 'koa-redis'
import session from 'koa-session2'
import getRoute from './routes/get'
import myResourceCreate from './routes/post.myResource.create'
import myResourceUpdate from './routes/post.myResource.update'
import myResourceDelete from './routes/post.myResource.delete'

// TODO: config
// create a config file for this secret
// next step - hook up kms (or vault-proxy) and use the vault url/hash
//
const SESSION_SECRET_KEY = "85889f1d6f515a578e0e52f443931eb9"


// import koaGenericSession from 'koa-generic-session'
// import redisStore from 'koa-redis'
// const session = require('koa-generic-session')
// const redisStore = require('koa-redis')
// // npm i koa-generic-session-dynamodb // for dynamodb
// keys???????
// app.keys = ['keys', 'keykeys']
// app.use(session({
//   store: redis({
//     host: "redis",
//   })
// }))


const server = new Koa()
const router = new Router()

const auth = async (ctx, next) => {
  // ctx.session.userId = 1
  // console.log("Auth - userId:", this.session.userId)
  // await next()
}

// main routes

router.post('/myresource', myResourceCreate)

router.post('/myresource/*/update', myResourceUpdate) // put/patch ?
router.post('/myresource/*/delete', myResourceDelete)

router.get('/*', getRoute)

// application server

server
  .use(helmet())
  .use(statics(process.env.RAZZLE_PUBLIC_DIR))
  // .use(session({
  //     key: SESSION_SECRET_KEY
  // }))
  .use(bodyParser())
  .use(logger())
  // .use(auth())
  .use(router.routes())
  .use(router.allowedMethods())

export default server
