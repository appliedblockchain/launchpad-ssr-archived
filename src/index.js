const http = require('http')

const app = require('./server').default

const currentHandler = app.callback()
const server = http.createServer(currentHandler)

server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.log(error)
  }

  console.log('🚀 Server Started!')
})
