const express = require('express')
const cors = require('cors');
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const questionRoutes = require('./routes/question')

app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`); // Log the HTTP method and URL
    next();
});

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.use('/', homeRoutes)
app.use('/question', questionRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}, you better catch it!`)
})    