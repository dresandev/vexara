import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import authConfig from '~/auth.config'
import { apiAuthPrefix, privateRoutes } from '~/routes'

const { auth: middleware } = NextAuth(authConfig)

export default middleware((req) => {
  const { nextUrl, auth } = req
  const isLoggedIn = !!auth
  const pathname = nextUrl.pathname

  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix)
  const isPrivateRoute = privateRoutes.includes(pathname)

  if (isLoggedIn || isApiAuthRoute) return

  if (!isLoggedIn && isPrivateRoute) {
    const url = nextUrl.clone()
    url.pathname = '/'
    url.hash = '#login'
    return NextResponse.redirect(url)
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
