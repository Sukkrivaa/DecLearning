const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("./../api/dbs/models/userSchema"); //to be done later

passport.serializeUser((user,done)=>{
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
})

passport.use(new GoogleStrategy({
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: require("./magicStrings").Routes.authRoutesString.googleStrategyRoutesString.googleAuthCodeDecryption
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({googleID: profile.id}).then((res) => {
    if(res){
      done(null, res)
    }else{
      new User({
        username: profile.displayName,
        googleID: profile.id,
        thumbnail: profile._json.image.url
      }).save().then((newUser) => {
        done(null, newUser);
      })
    }
  })
}))
