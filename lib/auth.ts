import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub,
              GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: 'offline',
                    response_type: 'code',
                }
            }
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: "Admin:",
                    type: "text",
                    placeholder: "Admin User",
                },
                password: {
                    label: "Password",
                    type: 'password',
                    placeholder: "Admin Password",
                },
            },
            async authorize(credentials) {
                const user = {id: "24", name:"Paing", password: "12345678"}

                if (credentials?.username === user.name && 
                    credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            },
        }),
             ]
});
