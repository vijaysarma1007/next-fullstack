export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      console.log("that user", user?._doc);
      if (user) {
        console.log("token this", token);
        token.id = user.id;
        token.isAdmin = user?._doc.isAdmin;
        token.email = user?._doc.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
        session.user.email = token.email;
        return session;
      }
    },
    authorized({ auth, request }) {
      console.log("this auth user", auth);
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      //Only Admin can reach the a dmin panel
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // only authenticated users can reach the blog page
      if (isOnBlogPage && !user) {
        return false;
      }

      //only unauthenticated users can reach the login page
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
