const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initPassport(passport, getUserByWorker_id) {
    /**
     * Called by passport to check if user was able to be authenticated for not
     * @param {string} worker_id
     * @param {string} password
     * @param {function} done - Function to call when we are done authenticating user
     */
    const authenticateUser = async (worker_id, password, done) => {
        //Find the user from the database
        const user = await getUserByWorker_id(worker_id);

        //User not found
        if (user === null) {
            return done(null, false, "No user with that worker ID");
        }

        //User found
        try {
            //User password match
            if (await bcrypt.compare(password, user.password_hash)) {
                return done(null, user);
            }

            //User password did not match
            else {
                return done(null, false, "Password incorrect");
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(new Strategy({ usernameField: "worker_id" }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.worker_id));
    passport.deserializeUser(async (worker_id, done) => {
        let userRow = await getUserByWorker_id(worker_id);
        if (userRow) return done(null, userRow);
        else done(new Error("User not found"));
    });
}

module.exports = initPassport;
