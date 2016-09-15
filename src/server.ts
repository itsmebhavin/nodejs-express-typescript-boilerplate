/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />
/// <reference path="typings/morgan/morgan.d.ts" />
/// <reference path="typings/cors/cors.d.ts" />
"use strict";
//Let's import express and other necessary middleware
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as http from 'http';
import * as cors from 'cors';
import * as morgan from 'morgan';


//Let's import your router files
import * as indexRouter from "./routes/index";
import * as usersRouter from "./routes/users";
import * as logger from "./helpers/winston";

class HttpServer {
    public app: express.Application;
    public router: express.Router;

    public static bootstrap(): HttpServer {
        return new HttpServer();
    }
    constructor() {
        this.app = express();

        //configure express and logging stuff
        this.ExpressConfiguration();

        //configure routes
        this.IndexRoutes();
        this.UsersRoutes();
    }
    private ExpressConfiguration() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        //cors settings
        this.app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
            next();
        });
        this.app.use(cors());

        // morgan settings
        this.app.use(morgan('dev'));
        // catch 404 and forward to error handler
        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }
    private IndexRoutes() {
        this.router = express.Router();
        var index: indexRouter.Index = new indexRouter.Index();
        this.router.get("/all", index.all.bind(index.all));
        this.router.get("/", index.get.bind(index.get));
        this.router.post("/", index.post.bind(index.post));
        //this.router.put("/", index.put.bind(index.put));
        this.router.delete("/", index.delete.bind(index.delete));
        this.app.use("/api/index", this.router);
    }

    private UsersRoutes() {
        this.router = express.Router();
        var users: usersRouter.Users = new usersRouter.Users();
        this.router.get("/all", users.all.bind(users.all));
        this.router.get("/", users.get.bind(users.get));
        this.router.post("/", users.post.bind(users.post));
        //this.router.put("/", users.put.bind(users.put));
        this.router.delete("/", users.delete.bind(users.delete));
        this.app.use("/api/users", this.router);
    }
}

//Now initialize app based on HttpServer Class,we defined.
const port: number = process.env.PORT || 8080;
let httpserver = HttpServer.bootstrap();
let app = httpserver.app;
app.set("port", port);

//Now initialize server from App
const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);



// ********************************************************
// DONOT TOUCH FOLLOWING FUNCTIONS. THEY ARE HERE FOR HELP
// ********************************************************
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    console.log("Listening on " + bind);
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
