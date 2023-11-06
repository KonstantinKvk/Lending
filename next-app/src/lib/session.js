// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    // password: "qweasdzxcasdasdasdasdasdzxczxczxc6a54sd65a4s6d54a6s5d4a6s5d46a5sd46a5sd46a5sd46a4sd6a54ds6a5d4s6a5sd4",
    cookieName: "iron-session/examples/next.js",
    // cookieOptions: {
    //   secure: process.env.NODE_ENV === "production",
    // },
};