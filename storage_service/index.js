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





// listen to port: 5001
app.listen(process.env.PORT, () => console.log("Listening on port: " + process.env.PORT))
