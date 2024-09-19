const passport = require('passport')
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

const User = require('./User')

const jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'секретный ключ',
}

passport.use(new JWTStrategy(jwtOptions, async (jwtPayLoad, done) => {
    const user = await User.findByPk(jwtPayLoad.id)
    if(user){
        done(null, user)
    }else{
        done(null, false)
    }
}))

module.exports = {jwtOptions}