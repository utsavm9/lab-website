const mysql = require("mysql");
const config = require("../config");

const database = mysql.createConnection({
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.ports.db
});

/**
 * Needs to be run first in order to set up database
 */
exports.setUpDatabase = () => {
    database.connect(error => {
        if (error) throw error;
        console.log("Connected to the database on port", config.ports.db);
    });

    //Ensuring DB connection is closed as process exits
    process.on("exit", () => database.end());
    process.on("SIGINT", () => {
        database.end();
        process.exit(1);
    });
};

/**
 * Closes database so no pending queries get lost
 */
exports.closeDatabase = () => {
    database.end();
};

/**
 * Find users by their Worker id
 * @param {string} worker_id - Worker ID to be looked up
 * @returns {Promise} A promise which resolves into the query result
 */
exports.getUserByWorker_id = worker_id => {
    return new Promise((resolve, reject) => {
        database.query("select * from users where worker_id=?", worker_id, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * Find user's experiment data
 * @param {string} worker_id - Worker ID to be looked up
 * @returns {Promise} A promise which resolves into the query result
 */
exports.getUserExperimentByWorker_id = worker_id => {
    return new Promise((resolve, reject) => {
        database.query("select * from users_experiments where worker_id=?", worker_id, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * Adds the given user into the table users
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} worker_id
 * @param {string} password - The already hashed password
 */
exports.addUser = (firstname, lastname, worker_id, password) => {
    const row = [firstname, lastname, worker_id, password];
    return new Promise((resolve, reject) => {
        database.query("insert into users(firstname, lastname, worker_id, password) values (?)", [row], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};
