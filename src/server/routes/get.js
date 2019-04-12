import selectResource from '../modules/db/selectResource'
import React from 'react'
import currentSession from '../utils/currentSession'
import getVersion from '../utils/version'
import { renderToString } from 'react-dom/server'
import renderPage from '../utils/renderPage'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const getRoute = path => {
  const { default: Component } = require(`../components/${path}`)

  return async ctx => {
    const session = await currentSession(ctx)
    const { user: currentUser } = session
    assets.version = await getVersion()

    try {
      const { search, path: urlPath } = ctx.req._parsedUrl
      const location = { search }
      const data = {
        currentUser,
        users: await selectResource('users'),
        companies: await selectResource('companies'),
        myResource: await selectResource('myresource'),
        contractValue: await ctx
          .contracts
          .HelloWorld
          .methods
          .getHelloWorld()
          .call()
      }

      /* eslint-disable no-param-reassign */
      ctx.body = renderPage(
        renderToString(
          <Component
            path={urlPath}
            location={location}
            {...data} />
        ),
        assets.version
      )
      /* eslint-enable no-param-reassign */
    } catch (error) {
      console.error(error)
    }

  }
}

export default getRoute
