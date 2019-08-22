# Facebook Login
using passport and nodeJS 

Go to:
```bash
http://localhost:3000/auth/facebook
```
# using passport with social media:
> we are going to need the following information:

* clientID: FACEBOOK_APP_ID,
* clientSecret: FACEBOOK_APP_SECRET,
* callbackURL: "http://..../auth/facebook/callback"

examples: https://github.com/jaredhanson/passport-facebook
---------------------------------------------------------
* clientID: GOOGLE_CLIENT_ID,
* clientSecret: GOOGLE_CLIENT_SECRET,
* callbackURL: "http://..../auth/google/callback"

examples: https://github.com/jaredhanson/passport-google-oauth2
----------------------------------------------------------
* consumerKey: LINKEDIN_API_KEY,
* consumerSecret: LINKEDIN_SECRET_KEY,
* callbackURL: "http://...../auth/linkedin/callback"

examples: https://github.com/jaredhanson/passport-linkedin
---------------------------------------------------------
routes in server:
* /auth/google
* /auth/google/callback

* /auth/linkedin
* /auth/linkedin/callback

* /auth/facebook
* /auth/facebook/callback
