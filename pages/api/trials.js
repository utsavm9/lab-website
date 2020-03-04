const database = require("../../backend/database");

export default async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    if (req.query.worker_id != null) {
        res.end(
            JSON.stringify({
                name: await database.getUserExperimentByWorker_id(req.query.worker_id)
            })
        );
    } else {
        res.end(
            JSON.stringify({
                name: ''
            })
        );
    }
};
