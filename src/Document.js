import React from 'react'
import { AfterRoot, AfterData } from '@jaredpalmer/after'

class Document extends React.Component {
  static async getInitialProps({ assets, data, renderPage, match }) {
    const page = await renderPage()
    return { assets, data, activePage: match.path, ...page }
  }

  capitalize = (str) => {
    return str.toLowerCase()
      .replace(/[-_/]+/g, ' ')
      .split(' ')
      .map((letter) => letter.charAt(0).toUpperCase() + letter.substring(1))
      .join(' ')
  }

  render() {
    const { helmet, assets, data, activePage } = this.props

    const htmlAttrs = helmet.htmlAttributes.toComponent()
    const bodyAttrs = helmet.bodyAttributes.toComponent()
    console.log('htmlAttrs', htmlAttrs)
    console.log('bodyAttrs', bodyAttrs)

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>{`Welcome - ${this.capitalize(activePage)}`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {assets.client.css && (
            <link rel="stylesheet" href={assets.client.css} />
          )}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    )
  }
}

export default Document
