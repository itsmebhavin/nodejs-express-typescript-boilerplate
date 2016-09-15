/// <reference path="typings/express/express.d.ts" />
/// <reference path="typings/body-parser/body-parser.d.ts" />
"use strict";
//Let's import express and other necessary middleware
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as http from 'http';

//Let's import your router files
import * as garageRouter from "./routes/garage";
import * as usersRouter from "./routes/users";
import * as piRouter from "./routes/pi";

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
        this.GarageRoutes();
        this.PiRoutes();
        this.UsersRoutes();
    }
    private ExpressConfiguration(){
      this.app.use(bodyParser.urlencoded({ extended: true }));
      this.app.use(bodyParser.json());
      // catch 404 and forward to error handler
      this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
          var error = new Error("Not Found");
          err.status = 404;
          next(err);
      });
    }

    //Garage automation router
    private GarageRoutes() {
        this.router = express.Router();
        var garage: garageRouter.Garage = new garageRouter.Garage();
        this.router.get("/on", garage.on.bind(garage.on));
        this.router.get("/off", garage.off.bind(garage.off));
        this.router.get("/on1", garage.on1.bind(garage.on1));
        this.router.get("/off1", garage.off1.bind(garage.off1));
        this.app.use("/api/garage",this.router);
    }

    private PiRoutes() {
        this.router = express.Router();
        var pi: piRouter.Pi = new piRouter.Pi();
        this.router.get("/cpu", pi.cpu.bind(pi.cpu));
        this.router.get("/linuxversion", pi.linuxversion.bind(pi.linuxversion));
        this.router.get("/memory", pi.memory.bind(pi.memory));
        this.router.get("/restart", pi.restart.bind(pi.restart));
        this.router.get("/shutdown", pi.shutdown.bind(pi.shutdown));
        this.app.use("/api/pi",this.router);
    }

    private UsersRoutes() {
        this.router = express.Router();
        var users: usersRouter.Users = new usersRouter.Users();
        this.router.get("/all", users.all.bind(users.all));
        this.app.use("/api/users",this.router);
    }
}

//Now initialize app based on HttpServer Class,we defined.
const port: number = process.env.PORT || 3030;
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
