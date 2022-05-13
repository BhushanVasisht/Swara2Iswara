const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore({
    projectId: 'fine-balm-349904',
    keyFilename: './swara2Iswara_key.json'
});


// Use caching for lesser latency and higher throughput
let janakaCache = []
let janyaCache = []

const janakaH = firestore.collection('janaka-ragas')
const janyaH = firestore.collection('janya-ragas')

const janakaObserver = janakaH.onSnapshot(async docSnapshot => {
    console.log('Received janaka snapshot');

    let janakalocal = []
    await docSnapshot.forEach(d => janakalocal.push(d.data()))
    janakaCache = janakalocal
}, err => {
    console.log(`Encountered error: ${err}`);
});

const janyaObserver = janyaH.onSnapshot(async docSnapshot => {
    console.log('Received janya snapshot');

    let janyaLocal = []
    await docSnapshot.forEach(d => janyaLocal.push(d.data()))
    janyaCache = janyaLocal
}, err => {
    console.log(`Encountered error: ${err}`);
});

exports.listAllRagas = async (req, res) => {

    return res.json({
        "janaka" : janakaCache,
        "janya" : janyaCache
    })
}


