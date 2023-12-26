import { nextAuthOptions } from '@/lib/next-auth.lib'
import NextAuth from 'next-auth/next'

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST }

// {
//   "user": {
//       "email": "test2@yandex.ru",
//       "sub": "3",
//       "id": "3",
//       "username": "user0.9389434935829488",
//       "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzAzNTEzNzQ5LCJleHAiOjE3MDYxMDU3NDl9.4khu-1uCNkFlfwunGCfYOVmZLjfyMyoE2CPxqgrS7LI",
//       "iat": 1703513749,
//       "exp": 1706105749,
//       "jti": "2fcc1b41-a9b9-4aca-b581-45eac09b8335"
//   },
//   "expires": "2024-01-24T14:15:49.707Z"
// }