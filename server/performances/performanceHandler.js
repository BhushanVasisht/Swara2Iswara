// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');
const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore({
    projectId: "fine-balm-349904"
});

const storage = new Storage({
    projectId: "fine-balm-349904"
});

const ragaFiles = storage.bucket('ragas');
const performanceMeta = firestore.collection("performances");


exports.listAllPerformances = (req, res) => {
    let collectionRef = firestore.collection('col');

    let data = collectionRef.listDocuments().then(documentRefs => {
        return firestore.getAll(...documentRefs);
    }).then(documentSnapshots => {
        for (let documentSnapshot of documentSnapshots) {
            if (documentSnapshot.exists) {
                console.log(`Found document with data: ${documentSnapshot.id}`);
            } else {
                console.log(`Found missing document: ${documentSnapshot.id}`);
            }
        }
    });

    return res.json({
        data: performanceMeta.id
    })
}


exports.createNewPerformanceEntry = async (req, res) => {

}
