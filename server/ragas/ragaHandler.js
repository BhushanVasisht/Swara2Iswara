// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');
const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore();
const storage = new Storage();
const ragaFiles = storage.bucket('ragas');
const janyaRagas = firestore.collection("janya-ragas")
const janakaRagas = firestore.collection("janaka-ragas")

exports.listAllRagas = (req, res) => {

}


exports.getOneRaga = (req, res) => {

}


exports.upsertRagaEntry = (req, res) => {

}
