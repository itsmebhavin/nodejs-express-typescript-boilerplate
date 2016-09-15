/// <reference path='../typings/tsd.d.ts' />

"use strict";
import * as express from "express";
import * as events from "events";
import * as stream from "stream";
const exec = require('child_process').exec;

module Route {
    export class Pi {

        cpu(req: express.Request, res: express.Response, next: express.NextFunction) {
            let child = exec('cat /proc/cpuinfo', function(error: Error, stdout: Buffer, stderr: Buffer) {
                if (error) console.log(error);
                res.json(stdout);
                process.stderr.write(stderr);
            });
            //res.json("{title:'index', message:'ON: Index'}");
        }

        linuxversion(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'index', message:'OFF: Index'}");
            let child = exec('cat /proc/version', function(error: Error, stdout: Buffer, stderr: Buffer) {
                if (error) console.log(error);
                res.json(stdout);
                process.stderr.write(stderr);
            });
        }

        memory(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'index', message:'OFF: Index'}");
            let child = exec('cat /proc/meminfo', function(error: Error, stdout: Buffer, stderr: Buffer) {
                if (error) console.log(error);
                res.json(stdout);
                process.stderr.write(stderr);
            });
        }


        restart(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'index', message:'OFF: Index'}");
            let child = exec('sudo shutdown -r now', function(error: Error, stdout: Buffer, stderr: Buffer) {
                if (error) console.log(error);
                res.json(stdout);
                process.stderr.write(stderr);
            });
        }


        shutdown(req: express.Request, res: express.Response, next: express.NextFunction) {
            //res.json("{title:'index', message:'OFF: Index'}");
            let child = exec('sudo shutdown -h now', function(error: Error, stdout: Buffer, stderr: Buffer) {
                if (error) console.log(error);
                res.json(stdout);
                process.stderr.write(stderr);
            });
        }
    }
}
export = Route;
