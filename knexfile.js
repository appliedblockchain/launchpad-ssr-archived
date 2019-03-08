module.exports = {
  client: 'pg',
  connection: {
    database: 'ssr',
    password: '1234567890',
    user: 'postgres'
  },
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
}
