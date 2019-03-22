const knexInit = require('knex')

module.exports = knexInit({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: 'postgres',
    password: '1234567890',
    database: 'ssr',
    port: 5432
  }
})
