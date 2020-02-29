const database = require("../../backend/database");

export default async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify({ name: await database.getUserExperimentByWorker_id(1234)}));
};