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
 * mcq: finds the mcq question from the mcq table by question_id
 * @param {integer} question_id
 * @returns {Promise} A promise which resolves into the query result
 */
getMcqByQuestionId = (question_id_arr) => {
    return new Promise((resolve, reject) => {
        database.query("SELECT * FROM mcq WHERE question_id IN (?)", [question_id_arr], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * text: finds a text from the text table by question_id
* @param {integer} question_id
* @returns {Promise} A promise which resolves into the query result
*/
getTextbyQuestionId = (question_id_arr) => {
    return new Promise((resolve, reject) => {
        database.query("SELECT * FROM text WHERE question_id IN (?)", [question_id_arr], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * finds an image from the image table by question_id 
 * @param {integer} question_id
 * @returns {Promise} A promise which resolves into the query result
 */
getImageByQuestionId = (question_id_arr) => {
    return new Promise((resolve, reject) => {
        database.query("SELECT * FROM image WHERE question_id IN (?)", [question_id_arr], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * take in experiment_id (not an array), 
 * Awaiting on mcq, text, and image functions and returning an object of question
 * @param {integer} experiment_id
 */
async function ExportQuestionsById(experiment_id) {
    //compute question_ids based on 1 experiment_id
    const output = new Promise((resolve, reject) => {
        database.query("SELECT * FROM experiments_questions WHERE experiment_id=?", experiment_id, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
    
    const output_rows = await output;
    console.log(output_rows);
    var arr = [];
    for (let i=0; i<output_rows.length; i++) {
        //make object to be passed into array
        const obj = {
            question_order: output_rows[i].question_order,
            question_id: output_rows[i].question_id
        };
       arr.push(obj);
    }
    console.log(arr);

    // return output_rows;
    return output_rows;


    // const mcqFunc = await getMcqByQuestionId(question_id);
    // const textFunc = await getTextbyQuestionId(question_id);
    // const imageFunc = await getImageByQuestionId(question_id);

    // var arrQuestions = [mcqFunc, textFunc, imageFunc];
    // return arrQuestions;


};
module.exports.ExportQuestionsById = ExportQuestionsById;
