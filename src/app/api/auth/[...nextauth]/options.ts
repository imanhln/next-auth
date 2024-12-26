import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "email", placeholder: "Email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const user = {
    //       id: "1",
    //       email: "test@example.com",
    //       password: "123456",
    //       name: "John Doe",
    //     };
    //     if (
    //       credentials?.email === user.email &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     }
    //     return null;
    //   },
    // }),
  ],
};
