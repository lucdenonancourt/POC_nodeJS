 
// Config object to be passed to Msal on creation.
// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
const {token} = require("morgan");
var msalConfig = {
  auth: {
      clientId: "changez-ici",
      authority: "https://login.microsoftonline.com/common",
      redirectURI: "http://localhost:30662/"
  },
  cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true
  }
}; 
  
// Add here scopes for id token to be used at MS Identity Platform endpoints.
const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
};

// Add here scopes for access token to be used at MS Graph API endpoints.
const tokenRequest = {
  scopes: ["Mail.Read"]
};
