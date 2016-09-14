/// <reference path='../typings/tsd.d.ts' />

"use strict";
import * as express from "express";

module Route{
 export class Users {

   all(req: express.Request, res: express.Response, next: express.NextFunction){
     res.json("{title:'users', message:'All: Users'}");
   }

   get(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'users', message:'GET: Users'}");
   	}

   	post(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'users', message:'POST: Users'}");
   	}

   	put(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'users', message:'PUT: Users'}");
   	}

   	delete(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'users', message:'DELETE: Users'}");
   	}
   	patch(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'users', message:'PATCH: Users'}");
   	}
   	options(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'users', message:'OPTIONS: Users'}");
   	}
   	head(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'users', message:'HEAD: Users'}");
   	}

 }
}
export = Route;
