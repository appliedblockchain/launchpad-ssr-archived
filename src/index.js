import http from 'http'
import { checkDeployments } from './server/utils/web3'

const app = require('./server').default

let currentHandler = app.callback()
const server = http.createServer(currentHandler)

const port = process.env.PORT || 3000

server.listen(port, async error => {
  if (error) {
    console.log('Error starting server')
    throw error
  }
  await checkDeployments()

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
