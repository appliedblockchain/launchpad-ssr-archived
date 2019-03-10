import Koa from 'koa'
import Router from 'koa-router'
import statics from 'koa-static'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import getRoute from './routes/get'
import myResourceCreate from './routes/post.myResource.create'
import myResourceUpdate from './routes/post.myResource.update'
import myResourceDelete from './routes/post.myResource.delete'

const server = new Koa()
const router = new Router()

const auth = async (ctx, next) => {
  this.session.userId = 1
  console.log("Auth - userId:", this.session.userId)
  await next()
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
  .use(bodyParser())
  .use(session())
  .use(logger())
  .use(auth())
  .use(router.routes())
  .use(router.allowedMethods())

export default server
