const axios = require("axios");


exports.listAllRagas = async (req, res) => {
    let rs = await axios.get(storage_service + "/performances")

    if (rs.status === 200) {

        return res.json({
            janaka: rs.data['janaka'],
            janya: rs.data['janya']
        })
    }
    else {
        res.statusCode(404)
        return null
    }
}


exports.getOneRaga = (req, res) => {

}


exports.upsertRagaEntry = (req, res) => {

}
