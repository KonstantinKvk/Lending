// /middleware.ts
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session/edge";

// export const sessionOptions = {
//   password: process.env.SECRET_COOKIE_PASSWORD,
//   cookieName: "iron-session/examples/next.js",
//   // cookieOptions: {
//   //   secure: process.env.NODE_ENV === "production",
//   // },
// };

export const middleware = async (req) => {
  const res = NextResponse.next();
  // const session = await getIronSession(req, res, {
  //   cookieName: "iron-session/examples/next.js",
  //   password: process.env.SECRET_COOKIE_PASSWORD,
  //   // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  //   // cookieOptions: {
  //   //   secure: process.env.NODE_ENV === "production",
  //   // },
  // });

  const session = await getIronSession(req, res, {
    cookieName: "iron-session/examples/next.js",
    password: "LocalLocalLocalLocalLocalLocalLocalLocal",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    // cookieOptions: {
    //   secure: process.env.NODE_ENV === "production",
    // },
  })

  // do anything with session here:
  const { user} = session;
  // console.log("from middleware", user);


  //if (req.nextUrl.pathname.startsWith('/')) {
    //ТУТ ВАЖНО!

  if (['/admin'].includes(req.nextUrl.pathname)) {
    if (user == undefined) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  // return NextResponse.rewrite(new URL('/about-2', request.url))


  // if (req.nextUrl.pathname == '/bookmark') {
  //   if (user == undefined) {
  //     return NextResponse.redirect(new URL('/registration', req.url))
  //   }
  //   // return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  // }

  // like mutate user:
  // user.something = someOtherThing;
  // or:
  // session.user = someoneElse;

  // uncomment next line to commit changes:
  // await session.save();
  // or maybe you want to destroy session:
  // await session.destroy();


  // if (user == undefined) {
  //   return NextResponse.redirect(new URL('/login', req.url))
  // }

  return res;
};

export const config = {
  matcher: ['/admin'],
};