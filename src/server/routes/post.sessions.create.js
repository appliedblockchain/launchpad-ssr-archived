import findOneBy from '../modules/db/findOneBy'
import qs from 'querystring'

import { compare } from '@appliedblockchain/mantle-auth/auth/scrypt'

const sessionsCreate = async (ctx) => {
  const { session } = ctx
  const { email, password, redirect } = ctx.request.body

  console.log(`Attempting to log in as user: ${email}`)
  // session.userId = 0

  const user = await findOneBy('users', 'email', email)

  if (user && await compare(password, user.password)) {
    session.userId = user.id
    ctx.redirect(decodeURIComponent(redirect) || '/')
  } else {
    ctx.redirect('/login?' + qs.stringify({ redirect, message: 'Invalid email or password' }))
  }
}

export default sessionsCreate
