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
function setUpDatabase() {
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
}

/**
 * Closes database so no pending queries get lost
 */
function closeDatabase() {
    database.end();
}

/**
 * Find users by their email
 * @param {string} email - Email to be looked up
 * @returns {Array} - All records in Users table that matched
 */
function getUserByEmail(email) {
    database.query(
        "select * from users where email=?",
        email,
        (error, result, field) => {
            if (error) throw error;
            console.log(result);
            console.log(field);
        }
    );
}

module.exports = { setUpDatabase, closeDatabase };
