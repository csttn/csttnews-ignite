import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { query as q } from "faunadb";
import { fauna } from "../../../services/fauna";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user",
    }),
  ],

  callbacks: {
    async signIn(user, account, profile) {
      console.log(user);
      return true;
    },
  },
});
