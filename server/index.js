const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// initial config
dotenv.config()
const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())


// routes
app.get("/test", (req, res) => {
    res.send("hello");
})


// listen to port: 5001
app.listen(process.env.PORT, () => console.log("Listening on port: " + process.env.PORT))
