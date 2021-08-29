import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user",
    }),
  ],
  site: process.env.NEXTAUTH_URL,
  database: process.env.MONGODB_URI + "nextauth",
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      session.works = "works";
      return Promise.resolve(session);
    },
  },
});
