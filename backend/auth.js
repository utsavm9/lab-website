//Authentication and Authorization libraries
const initPassport = require("../util/passport-config");
const bcrypt = require("bcrypt");
const passport = require("passport");
const database = require("./database");

function setAuthentication(server, nextApp) {
    initPassport(
        passport,
        async worker_id => {
            try {
                const userRow = await database.getUserByWorker_id(worker_id);
                if (userRow.length <= 0) return null;
                return {
                    firstname: userRow[0].firstname,
                    lastname: userRow[0].lastname,
                    worker_id: userRow[0].worker_id,
                    password_hash: userRow[0].password_hash
                };
            } catch (error) {
                console.log(error);
                return null;
            }
        }
    );

    server.post("/login", logInOrFlashMessage);

    server.post("/register", async (req, res) => {
        try {
            //Not registering user whose Worker ID is in the database
            const userRecord = await database.getUserByWorker_id(req.body.worker_id);
            if (userRecord.length > 0)
                return nextApp.render(req, res, "/register", {
                    failReason: "Worker ID already registered. Try logging in."
                });

            // New user
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            await database.addUser(req.body.firstname, req.body.lastname, req.body.worker_id, hashedPassword);
            return nextApp.render(req, res, "/login", {
                failReason: req.body.firstname + " registered successfully."
            });
        } catch (e) {
            console.log(e);
            return nextApp.render(req, res, "/register", {
                failReason: "An error occured in the server. Please retry for contact website administrators."
            });
        }
    });

    server.post("/logout", logUserOut, (_, res) => res.redirect("/"));

    /**
     * Login handler
     * Second argument of passport.authenticate is the done function from initPassport in passport-config.js
     * @param {express.Request} req - Request we got
     * @param {express.Response} res - Response constructed till now
     * @param {express.nextFunction} next - Function to execute if we want to continue serving the page
     */
    function logInOrFlashMessage(req, res, next) {
        // Get a next() function from passport
        const genNextFunction = passport.authenticate("local", (error, user, info) => {
            if (error) {
                return next(error);
            } else if (info) {
                // Available within login.js as context.query.fairReason
                return nextApp.render(req, res, "/login", {
                    failReason: info
                });
            } else req.logIn(user, e => (e ? next(e) : res.redirect("/")));
        });
        genNextFunction(req, res, next);
    }

    /**
     * Function invoked when routing to ensure that the user is logged out
     * If the user is logged in, we logout the user
     */
    function logUserOut(req, _, next) {
        if (req.isAuthenticated()) {
            req.logOut();
        }
        next();
    }
}

module.exports = setAuthentication;
//Testing