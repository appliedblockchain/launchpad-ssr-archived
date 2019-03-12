import findAll from '../utils/db/findAll'

const sessionsCreate = async (ctx) => {
  const { session } = ctx
  const userEmail = ctx.request.body.email
  console.log(`Attempting to log in as user: ${userEmail}`)
  session.userId = 0

  const users = await findAll('users')

  let user = users.filter((userCurr) => (
    userCurr.email === userEmail
  ))
  user = user[0]

  if (user) {
    console.log(`Logging in as user ${user.email} (id ${user.id})`)
    session.userId = user.id
    ctx.redirect('/')
  } else {
    ctx.redirect('/login')
  }
}

export default sessionsCreate
