const passport = require('passport');

// ======================configuring the jwt strategy for authentication=====================

const JWTStrategy = require('passport-jwt').Strategy;

const ExtractJWT = require('passport-jwt').ExtractJwt;

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'customer_api',                              //change key if required

}

passport.use(new JWTStrategy(opts, function(jwtPayload, done){
    Doctor.findById(jwtPayload._id, function(err, user){
        if(err){
            console.log('Error in finding user from db', err);
            return;
        }
        if(user){
            return done(null, user);
        }
        else{
            return done(null, false);
        }
    })
}))

module.exports = passport;