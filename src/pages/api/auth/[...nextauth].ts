import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '../../../lib/prisma'

const GITHUB_ID = '9a3ea3b3bd692671fef4'
const GITHUB_SECRET = 'ef47a37bb3c4218afb7d024f375194ec018ce184'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    })
  ]
}

export default NextAuth(authOptions)
