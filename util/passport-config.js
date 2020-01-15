const Strategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initPassport(passport, getUserByEmail, getUserById) {
    /**
     * Called by passport to check if user was able to be authenticated for not
     * @param {string} email
     * @param {string} password
     * @param {function} done - Function to call when we are done authenticating user
     */
    const authenticateUser = async (email, password, done) => {
        //Find the user from the database
        const user = getUserByEmail(email);

        //User not found
        if (user === undefined) {
            return done(null, false, "No user with that email");
        }

        //User found
        try {
            //User password match
            if (await bcrypt.compare(password, user.password)) {
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

    passport.use(new Strategy({ usernameField: "email" }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => done(null, getUserById(id)));
}

module.exports = initPassport;
