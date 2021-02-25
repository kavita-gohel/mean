const jwt = require('jsonwebtoken')

const jwtKey = 'my_secret_key'
const expiresIn = 100

const users = {
  user1: 'password1',
  user2: 'password2',
  user: 'password'
}

    const signIn = (req, res) => {
      // Get credentials from JSON body
      const { username, password } = req.body
      if (!username || !password || users[username] !== password) {
        // return 401 error is username or password doesn't exist, or if password does
        // not match the password in our records
        return res.status(401).end()
      }

      // Create a new token with the username in the payload
      // and which expires 300 seconds after issue
      const token = jwt.sign({ username }, jwtKey, {
        algorithm: 'HS256',
        expiresIn: expiresIn
      })
      console.log('token:', token)

      // set the cookie as the token string, with a similar max age as the token
      // here, the max age is in milliseconds, so we multiply by 1000
      res.cookie('token', token, { maxAge: expiresIn * 1000 })
      res.end()
    }

      const welcome = (req, res) => {
        // We can obtain the session token from the requests cookies, which come with every request
        const token = req.cookies.token

        // if the cookie is not set, return an unauthorized error
        if (!token) {
          return res.status(401).end()
        }

        var payload
        try {
          payload = jwt.verify(token, jwtKey)
        } catch (e) {
          if (e instanceof jwt.JsonWebTokenError) {
            // if the error thrown is because the JWT is unauthorized, return a 401 error
            return res.status(401).end()
          }
          // otherwise, return a bad request error
          return res.status(400).end()
        }

        // Finally, return the welcome message to the user, along with their
        // username given in the token
        res.send(`Welcome ${payload.username}!`)
      }


module.exports = {
  signIn,
  welcome
 }