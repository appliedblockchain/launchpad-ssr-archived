import findOne from '../modules/db/findOne'

const currentSession = async (ctx) => {
  const { session } = ctx

  if (!session) {
    return { user: null }
  }

  const { userId } = session

  if (!userId) {
    return { user: null }
  }
  const user = await findOne('users', userId)
  if (user) {
    return { user }
  }
}

export default currentSession
