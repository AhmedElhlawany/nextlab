import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
};

const auth = NextAuth(authOptions);

// إذا كنت في ملف route.js داخل app/api/auth/[...nextauth]/route.js
export { auth as GET, auth as POST };
