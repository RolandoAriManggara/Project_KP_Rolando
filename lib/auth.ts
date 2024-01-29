
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcryptjs";

export const authOptions: AuthOptions = {
    pages: {
        signIn: '/auth/signin',
    },
    adapter: PrismaAdapter(db),
    session: {
      strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            nik: { label: "NIK", type: "text", placeholder: "NIK" },
            password: { label: "Password", type: "password", placeholder: "Password" }
          },
          async authorize(credentials) {
            if (!credentials?.nik || !credentials?.password) {
              return null;
            }

            const existingUser = await db.pegawai.findUnique({
              where: {nik: credentials?.nik}
            });
            if (!existingUser) {
              return null
            }
            
            const passwordMatch = await compare(credentials.password, existingUser.password);

            if(!passwordMatch){
              return null;
            }

            return {
              id:  `${existingUser.id}`,
              nik: existingUser.nik,
              nama: existingUser.nama,
              agama: existingUser.agama,
              jeniskelamin: existingUser.jeniskelamin,
              alamat: existingUser.alamat,
            }

          }
        })
      ],
      callbacks: {
        async jwt({token, user}) {
          if(user){
            return {
              ...token,
              nama: user.nama
            }
          }
          return token
        },
        async session({ session, token }) {
          return {
            ...session,
            user: {
              ...session.user,
              nama: token.nama
            }
          }
        }
      }
}