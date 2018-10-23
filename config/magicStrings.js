//Strings used more than once throughout the app so as to avoid typo-related bugs
//do not include paths

module.exports = {
  actionStrings:  {

  },
  Routes: {
    apiRoutesString: {
      mongoRoutesString: {
      }
    },
    authRoutesString: {
      generalRoutesString:{
        getCookieValue: "/getCookieValue",
        logout: "/auth/logout"
      },
      googleStrategyRoutesString: {
        googleAuthInitial: "/auth/google",
        googleAuthCodeDecryption: "/auth/google/redirect"
      }
    }
  }
}
