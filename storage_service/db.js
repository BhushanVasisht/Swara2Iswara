const {Storage} = require('@google-cloud/storage');
const consistentHashing = require('./consistentHashing');

const storage = new Storage({
    projectId: 'fine-balm-349904',
    keyFilename: '../../fine-balm-349904-0128cf76bf7f.json'
});

exports.getOneRaga = (req, res) => {
    let shard = consistentHashing.getReadShard(req);
}

exports.upsertRagaEntry = (req, res) => {
    let shards = consistentHashing.getWriteShards(req);

}


