/// <reference path='../typings/tsd.d.ts' />

"use strict";
import * as express from "express";
import * as events from "events";

//rpi-gpio Setup
const gpio = require("../helpers/rpi-gpio.js");
gpio.setup(7, gpio.DIR_OUT);


//johnny-five setup
const five = require("johnny-five");
const board = new five.Board();

module Route {
    export class Garage {

        //using rpi-gpio
        on(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'garage', message:'ON: Garage'}");
            gpio.write(7, true, function(err: Error) {
                if (err) console.log('Error writing to pin');
                console.log('Written to pin');
            });
        }

        off(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'garage', message:'OFF: Garage'}");
            gpio.write(7, false, function(err: Error) {
                if (err) console.log('Error writing to pin');
                console.log('Written to pin');
            });
        }

        //using johnny-five
        on1(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'garage', message:'ON: Garage'}");
            board.on("ready", function() {
                let relay = new five.Relay(7);
                console.log(relay.type);
                relay.on();
                this.repl.inject({relay:relay});
            });
        }

        off1(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'garage', message:'OFF: Garage'}");
            board.on("ready", function() {
                let relay = new five.Relay({
                    type: "NC",
                    pin: 7
                });
                console.log(relay.type);
                relay.off();
                this.repl.inject({relay:relay});
            });
        }
    }
}
export = Route;
