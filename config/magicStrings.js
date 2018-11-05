//Strings used more than once throughout the app so as to avoid typo-related bugs
//do not include paths

module.exports = {
  actionStrings:  {
    activeStateActions: {
      CHANGE_ACTIVE_SUBTOPIC: "CHANGE_ACTIVE_SUBTOPIC"
    },
    SubtopicListActions: {
      SET_INITIAL_STATE: "SET_INITIAL_STATE"
    }
  },
  Routes: {
    apiRoutesString: {
      mongoRoutesString: {
        getInitialSubtopics: "/api/getInitialSubtopics",
        pushProblems: "/api/pushProblems",
        pushRequests: "/api/pushRequests",
        pushChanges: "/api/pushChanges",
        getNewChanges: "/api/getNewChanges"
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
