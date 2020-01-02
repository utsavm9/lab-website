//Authentication and Authorization libraries
const initPassport = require("../util/passport-config");
const bcrypt = require("bcrypt");
const passport = require("passport");
const database = require("./database");

const users = [];

function setAuthentication(server, nextApp) {
    initPassport(
        passport,
        email => users.find(user => user.email === email),
        id => users.find(user => user.id === id)
    );

    server.post("/login", logInOrFlashMessage);

    server.post("/register", async (req, res) => {
        const r = await database.getUserByEmail("utsavm9@gmail.com");
        console.log(r);
        if (!users.find(user => user.email === req.body.email)) {
            try {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                users.push({
                    id: Date.now().toString(),
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword
                });
                database.addUser("utsav", "munendra", "utsavm9@gmail.com", "2").then(
                    r => console.log(r),
                    e => console.log(e)
                );
                res.redirect("/login");
            } catch {
                res.redirect("/register");
            }
        } else {
            return nextApp.render(req, res, "/register", {
                failReason: "Email already registered. Try logging in."
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
