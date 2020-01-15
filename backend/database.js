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
 * Find users by their email
 * @param {string} email - Email to be looked up
 * @returns {Promise} A promise which resolves into the query result
 */
exports.getUserByEmail = email => {
    return new Promise((resolve, reject) => {
        database.query("select * from users where email=?", email, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * Find users by their id
 * @param {int} id - An id to be looked up
 * @returns {Promise} A promise which resolves into the query result
 */
exports.getUserById = id => {
    return new Promise((resolve, reject) => {
        database.query("select * from users where id=?", id, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};

/**
 * Adds the given user into the table users
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} email
 * @param {string} password - The already hashed password
 */
exports.addUser = (firstname, lastname, email, password) => {
    const row = [firstname, lastname, email, password];
    return new Promise((resolve, reject) => {
        database.query("insert into users(firstname, lastname, email, password) values (?)", [row], (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
};
