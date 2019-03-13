const Koa = require('koa')
const Router = require('koa-router')
const statics = require('koa-static')
const helmet = require('koa-helmet')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const koaSession = require('koa-session2')
const getRoute = require('./routes/get')
const sessionsCreate = require('./routes/post.sessions.create')
const myResourceCreate = require('./routes/post.myResource.create')
const myResourceUpdate = require('./routes/post.myResource.update')
const myResourceDelete = require('./routes/post.myResource.delete')
require('sucrase/registerJSX')

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

// get routes
router.get('/*', getRoute)

// application server
server
  .use(helmet())
  .use(statics(process.env.RAZZLE_PUBLIC_DIR))
  .use(koaSession({
    key: SESSION_SECRET_KEY
  }))
  .use(bodyParser())
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports = server
