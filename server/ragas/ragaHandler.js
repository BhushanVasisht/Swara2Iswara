const axios = require("axios");
const storage_service = "http://localhost:5001"

exports.listAllRagas = async (req, res) => {
    let rs = await axios.get(storage_service + "/ragas")

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
