import http from 'http'

const app = require('./server').default

let currentHandler = app.callback()
const server = http.createServer(currentHandler)

const port = process.env.PORT || 3000

server.listen(port, error => {
  if (error) {
    console.log('Error starting server')
    throw error
  }

  console.log(`🚀 Server Started!, listening on port ${port}`)
})

if (module.hot) {
  console.log('✅ Server-side HMR Enabled!')

  module.hot.accept('./server', () => {
    console.log('🔁 HMR Reloading `./server`...')

    try {
      const newHandler = require('./server').default.callback()
      server.removeListener('request', currentHandler)
      server.on('request', newHandler)
      currentHandler = newHandler
    } catch (error) {
      console.error(error)
    }
  })
}
