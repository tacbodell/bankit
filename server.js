const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const questionRoutes = require('./routes/question')

// log every request from client
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`); // Log the HTTP method and URL
    next();
});

// environment variables
require('dotenv').config({path: './config/.env'})

connectDB()

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport config
require('./config/passport')(passport)



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// routes
app.use('/', homeRoutes)
app.use('/question', questionRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`)
})    