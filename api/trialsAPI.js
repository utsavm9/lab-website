const database = require("./database");
/**
 * Find user's   experiment data
 * @param {string} worker_id - Worker ID to be looked up
 * @returns {Promise} A promise which resolves into the query result
 */
exports.getUserExperimentByWorker_id = worker_id => {
    
    return new Promise((resolve, reject) => {
        async worker_id => {
            try {
                const userRow = await database.getUserByWorker_id(worker_id);
                if (userRow.length <= 0) return null;
                return {
                    worker_id: userRow[0].worker_id,
                    experiment_id: userRow[0].experiment_id,
                    trial_id: userRow[0].trial_id
                };
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    });
};