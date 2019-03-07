import Koa from 'koa';
import Router from 'koa-router'
import statics from 'koa-static'
import bodyParser from 'koa-bodyparser'
import { render } from '@jaredpalmer/after';
import routes from '../shared/routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = new Koa();
const router = new Router()

router
  .get('/*', async (ctx) => {
    try {
      const html = await render({
        req:ctx.req,
        res:ctx.res,
        routes,
        assets,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
      });
      ctx.body = html;
    } catch (error) {
      console.error(error);
    }
  });

server
  .use(statics(process.env.RAZZLE_PUBLIC_DIR))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  

export default server;
