const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const ragaHandler = require('./ragas/ragaHandler')
const compositionHandler = require('./compositions/compositionHandler')
const performanceHandler = require('./performances/performanceHandler')

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

app.get("/ragas/list", (req, res) => {
    return ragaHandler.listAllRagas(req, res)
})

app.get("/ragas/:id", (req, res) => {
    return ragaHandler.getOneRaga(req, res);
})

app.post("/ragas", (req, res) => {
    return ragaHandler.createNewRagaEntry(req, res)
})

app.get("/compositions/list", (req, res) => {
    return compositionHandler.listAllCompositions(req, res)
})

app.get("/compositions/:id", (req, res) => {
    return compositionHandler.getOneComposition(req, res);
})

app.post("/compositions", (req, res) => {
    return compositionHandler.createNewCompositionEntry(req, res)
})

app.get("/performances/list", (req, res) => {
    return performanceHandler.listAllPerformances(req, res)
})

app.post("/performances", (req, res) => {
    return performanceHandler.createNewPerformanceEntry(req, res)
})


// listen to port: 5001
app.listen(process.env.PORT, () => console.log("Listening on port: " + process.env.PORT))
