const {Storage} = require('@google-cloud/storage');
const {Firestore} = require('@google-cloud/firestore');
const consistentHashing = require('./consistentHashing');

// Create a new client
const firestore = new Firestore({
    projectId: 'fine-balm-349904',
    keyFilename: '../../fine-balm-349904-0128cf76bf7f.json'
});
const storage = new Storage({
    projectId: 'fine-balm-349904',
    keyFilename: '../../fine-balm-349904-0128cf76bf7f.json'
});

exports.getRaga = (req, res) => {
    let shard = consistentHashing.getSingleShard(req);
}


