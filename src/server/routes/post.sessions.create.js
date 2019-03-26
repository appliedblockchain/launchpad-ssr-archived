import findOneBy from '../utils/db/findOneBy'
import qs from 'querystring'

const sessionsCreate = async (ctx) => {
  const { session } = ctx
  const { email, password, redirect } = ctx.request.body

  console.log(`Attempting to log in as user: ${email}`)
  // session.userId = 0

  const user = await findOneBy('users', 'email', email)

  if (user && user.password === password) {
    console.error('TODO: Password matching is plaintext!')
    console.log(`Logging in as user ${user.email} (id ${user.id})`)
    session.userId = user.id
    ctx.redirect(decodeURIComponent(redirect) || '/')
  } else {
    ctx.redirect('/login?' + qs.stringify({ redirect, message: 'Invalid email or password' }))
  }
}

export default sessionsCreate
