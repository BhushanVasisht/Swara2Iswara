const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const aggServer = require('./aggService')

// initial config
dotenv.config()
const app = express()

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())


app.get("/ragas", (req, res) => {
    return aggServer.getAllRagas(req, res);
})

app.get("/performances", (req, res) => {
    return aggServer.getAllPerformances(req, res);
})


// listen to port: 5001
app.listen(process.env.PORT, () => console.log("Listening on port: " + process.env.PORT))
