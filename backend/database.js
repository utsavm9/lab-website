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
 * @param {string} password_hash - The already hashed password
 */
exports.addUser = (firstname, lastname, worker_id, password_hash) => {
    const row = [firstname, lastname, worker_id, password_hash];
    return new Promise((resolve, reject) => {
        database.query("insert into users(firstname, lastname, worker_id, password_hash) values (?)", [row], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};
/**
 * finds the mcq question from the mcq table by question_id
 * @param {integer} question_id
 * @param {string}  question
 * @param {string}  choice_1
 * @param {string}  choice_2
 * @param {string}  choice_3
 * @param {string}  choice_4
 */

exports.getMcqByQuestionsId(question_id, question, choice_1, choice_2, choice_3, choice_4) => {
    return new Promise((resolve, reject) => {
        database.query("select * from mcq where question_id=?", question_id, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * finds a text from the text table by question_id
 * @param {integer} question_id
 * @param {string} question
 * @param {string} hint
 */
exports.getTextbyQuestionId(question_id, question, hint) => {
    return new Promise((resolve, reject) => {
        database.query("select * from text where question_id=?", question_id, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * finds an image from the image table by question_id 
 */
