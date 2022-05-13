const {Storage} = require('@google-cloud/storage');
const {Firestore} = require('@google-cloud/firestore');

// Create a new client
const firestore = new Firestore({
    projectId: 'fine-balm-349904',
    keyFilename: './swara2Iswara_key.json'
});
const storage = new Storage({
    projectId: 'fine-balm-349904',
    keyFilename: './swara2Iswara_key.json'
});





