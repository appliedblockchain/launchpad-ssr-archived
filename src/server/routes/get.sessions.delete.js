'use strict'

const sessionsCreate = async (ctx) => {
  ctx.session = null // eslint-disable-line
  ctx.redirect('/login')
}

export default sessionsCreate
