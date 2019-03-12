const findOne = require('../utils/db/findOne')

const currentSession = async (ctx) => {
  const { session } = ctx
  const { userId } = session
  console.log('Auth - userId:', userId)
  if (!userId) {
    return { user: null }
  }
  let user = await findOne('users', userId)
  if (user) {
    user = user[0]
    console.log(`Auth - user: ${user.email}`)
    return { user }
  }
}

module.exports = currentSession
