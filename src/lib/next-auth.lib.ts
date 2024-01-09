import { $fetch } from '@/$api/api.fetch';
import { IUser } from '@/types/user.types';
import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const nextAuthOptions: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: {
          type: 'text',
        },
        email: {
          type: 'text',
        },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        // Регистрация
        if (credentials.username) {
          try {
            const data = await $fetch.post<{
              user: IUser;
              jwt: string;
            }>(`/auth/local/register`, credentials);
            return {
              id: data.user.id.toString(),
              email: data.user.email,
              avatar: data.user.avatar?.url,
              username: data.user.username,
              jwt: data.jwt,
            } as User;
          } catch (e) {
            return Promise.reject({
              message: 'Register error, not valid data!',
            });
          }
        }
        // Авторизация
        try {
          const data = await $fetch.post<{
            user: IUser;
            jwt: string;
          }>(`/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
          });
          console.log(data, 'loginUserData')
          return {
            id: data.user?.id,
            email: data.user.email,
            avatar: data.user.avatar?.url,
            username: data.user.username,
            jwt: data.jwt,
          };
        } catch (e) {
          return Promise.reject({
            message: 'Login error, not valid data!',
          });
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account }) {
      return { ...token, ...user };
    },
    session({ session, token, user }) {
      session.user = token as User;
      return session;
    },
  },
};
