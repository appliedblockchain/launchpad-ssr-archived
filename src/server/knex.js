const knexInit = require('knex')

module.exports = knexInit({
  client: 'pg',
  connection: {
    user: 'postgres',
    password: '1234567890',
    database: 'ssr'
  }
})
