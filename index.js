const express = require('express')
const PORT = process.env.PORT || 5000
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')

// mongoose config
const mongoose = require('mongoose')
mongoose.connect(keys.mongoURI)

require('./models/user')

// passport config
require('./services/passport')

const app = express()
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

app.listen(PORT)
