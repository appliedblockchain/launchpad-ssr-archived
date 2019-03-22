module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    database: 'ssr',
    password: '1234567890',
    user: 'postgres',
    port: 5432
  },
  migrations: {
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  }
}
