import currentSession from '../utils/currentSession'

export default async function (ctx, next) {
  const session = await currentSession(ctx)
  const { user } = session

  if (ctx.request.method === 'GET') {
    if (!user && !ctx.req.url.startsWith('/login')) {
      ctx.redirect(`/login?redirect=${ctx.req.url}`)
      return
    }

    if (user && ctx.req.url.startsWith('/login')) {
      ctx.redirect('/')
      return
    }
  } else if (!user && ctx.req.url !== '/sessions/create') {
    ctx.redirect(`/login?message=${encodeURIComponent('Please Log In First')}`)
    return
  }

  await next()
}
