const knexInit = require('knex')

let knex
const createInstance = () => knexInit({
  client: 'pg',
  connection: {
    user: 'postgres',
    password: '1234567890',
    database: 'ssr',
    port: 5432
  }
})

module.exports = knex || (knex = createInstance())
