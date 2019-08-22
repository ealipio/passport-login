# Facebook - Linkedin and Google Sign in
using passport and nodeJS to login with google facebook and linkedin

Go to:
```bash
node index.js
# then go to http://localhost:3000/

```

# using passport with social media:
> we are going to need the following information:

* clientID: FACEBOOK_APP_ID,
* clientSecret: FACEBOOK_APP_SECRET,
* callbackURL: "http://..../auth/facebook/callback"
* examples: https://github.com/jaredhanson/passport-facebook
---------------------------------------------------------
* clientID: GOOGLE_CLIENT_ID,
* clientSecret: GOOGLE_CLIENT_SECRET,
* callbackURL: "http://..../auth/google/callback"
* examples: https://github.com/jaredhanson/passport-google-oauth2
---------------------------------------------------------
* clientID: LINKEDIN_API_KEY,
* clientSecret: LINKEDIN_SECRET_KEY,
* callbackURL: "http://...../auth/linkedin/callback"
* examples: 
    * https://github.com/auth0/passport-linkedin-oauth2  [DEPRECATED]
    * https://github.com/sokratisvidros/passport-linkedin-oauth2
---------------------------------------------------------
routes in server:
* /auth/google
* /auth/google/callback

* /auth/linkedin
* /auth/linkedin/callback

* /auth/facebook
* /auth/facebook/callback


redirects:
> we include this while creating the app in every platform
* http://localhost:3000/auth/facebook/redirect
* http://localhost:3000/auth/google/redirect
* http://localhost:3000/auth/linkedin/redirect