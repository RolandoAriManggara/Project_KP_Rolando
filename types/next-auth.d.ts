import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    nama: String
  }
  interface Session {
    user: User & {
        nama: String
    }
    token: {
        nama: String
    }
  }
}