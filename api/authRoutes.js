const passport = require("passport");
const authRoutesString = require("./../config/magicStrings").Routes.authRoutesString;


module.exports = (app) => {
  app.get(authRoutesString.googleStrategyRoutesString.googleAuthInitial, passport.authenticate("google", {
    scope: ["profile"]
  }));

  app.get(authRoutesString.googleStrategyRoutesString.googleAuthCodeDecryption, passport.authenticate("google"), (req,res)=>{
    console.log(req.user);
    res.redirect("/");
  });


  app.get(authRoutesString.generalRoutesString.getCookieValue, (req,res) => {
    res.send(req.user);
  });

  app.get(authRoutesString.generalRoutesString.logout, (req, res) => {
    req.logout();
    res.redirect("/");
  });
}
