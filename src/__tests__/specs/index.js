import http from 'http'
import request from 'supertest'
import app from '../../server'

const currentHandler = app.callback()
const server = http.createServer(currentHandler)

// console.log(app)
it('loads the app', async () => {
  const resp = await request(server)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200)
  console.log(resp)
})

// it('delete user', async () => {
//   const userByEmail = await request(app)
//     .get('/users/get-by-email/user@test')
//     .set('Accept', 'application/json')
//     .set('Authorization', config.get('test.tokens.admin'))
//
//   const result = await testIt('delete', `/users/${userByEmail.body._id}`)
//   expect(result).toEqual([401, 403, 401, 200])
// })
//
// request(app)
//   .get('/user')
//   .auth('username', 'password')
//   .set('Accept', 'application/json')
//   .expect('Content-Type', /json/)
//   .expect(200, done);
