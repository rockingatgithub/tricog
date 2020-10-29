const passport = require("passport");
const sql = require("../config/dbconnect");

// ======================configuring the jwt strategy for authentication=====================

const JWTStrategy = require("passport-jwt").Strategy;

const ExtractJWT = require("passport-jwt").ExtractJwt;

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "customer_api", //change key if required
};

passport.use(
  new JWTStrategy(opts, function (jwtPayload, done) {
    sql.query(
      `SELECT * FROM testcustomers WHERE email = "${jwtPayload.email}"`,
      (err, res) => {
        if (err) {
          return done(null, false);
        }

        if (res.length) {
          return done(null, res[0]);
        }

        return done(null, false);
      }
    );
  })
);

module.exports = passport;
