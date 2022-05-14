const axios = require("axios");
const storage_service = "http://localhost:5001"

exports.listAllPerformances = async (req, res) => {
    let rs = await axios.get(storage_service + "/performances")

    if (rs.status === 200) {

        return res.json({
            data: rs.data['events']
        })
    }
    else {
        res.statusCode(404)
        return null
    }
}


exports.createNewPerformanceEntry = (req, res) => {

}
