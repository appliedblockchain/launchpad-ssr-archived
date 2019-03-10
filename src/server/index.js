import Koa from "koa"
import Router from "koa-router"
import statics from "koa-static"
import helmet from "koa-helmet"
import bodyParser from "koa-bodyparser"
import routes from "../shared/routes"
import knex from "./knex"

const server = new Koa()
const router = new Router()

import getRoute from './routes/get'
import newResourceCreate from './routes/post.newResource.create'
import newResourceUpdate from './routes/post.newResource.update'
import newResourceDelete from './routes/post.newResource.delete'

// main routes

router.post("/newresource", newResourceCreate)

router.post("/newresource/*/update", newResourceUpdate) // put/patch ?
router.post("/newresource/*/delete", newResourceDelete)

router.get("/*", getRoute)

// application server

server
  .use(helmet())
  .use(statics(process.env.RAZZLE_PUBLIC_DIR))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

export default server
