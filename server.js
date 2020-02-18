const nextJS = require("next");
const express = require("express");

//Authentication and Authorization libraries
const passport = require("passport");
const session = require("express-session");

//Importing all parts of our divided backend
const httpsPort = require("./config").ports.https;
const setAuthentication = require("./backend/auth");
const { setUpDatabase, 
        closeDatabase, 
        getPromiseAsync,
        getMcqByQuestionsId,
        getTextbyQuestionId,
        getImageByQuestionId
     } = require("./backend/database");

const dev = process.env.NODE_ENV !== "production";
const nextApp = nextJS({ dev });
const nextRequestHandler = nextApp.getRequestHandler();

nextApp
    .prepare()
    .then(() => {
        const server = express();

        //Middlewares
        server.use(express.urlencoded({ extended: false }));
        server.use(
            session({
                secret: "TODO - Make this a long and random string",
                resave: false,
                saveUninitialized: false
            })
        );
        server.use(passport.initialize());
        server.use(passport.session());

        // Our own routes and middlewares
        setAuthentication(server, nextApp);
        setUpDatabase();
        getPromiseAsync('1');

        // All the rest of paths are managed by NextJS
        server.all("*", nextRequestHandler);

        //Starting up the server
        server.listen(httpsPort, err => {
            if (err) throw err;
            console.log("Ready for requests on port", httpsPort);
        });


    })
    .catch(ex => {
        console.log(ex.stack);
        closeDatabase();
        process.exit(1);
    });
