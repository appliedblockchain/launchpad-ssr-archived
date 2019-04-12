const renderPage = (html, version) => (
  `<!DOCTYPE html>
  <html>
    <head>
      <title>Launchpad SSR</title>
      <meta charset="utf-8" />
      <link rel="stylesheet" href="http://localhost:3000/style.css" />
    </head>
    <body>
      <div id="app">${html}</div>
      <div class="footer"> Version: ${version} </div>
    </body>
  </html>`
)

export default renderPage
