/// <reference path='../typings/tsd.d.ts' />

"use strict";
import * as express from "express";

module Route{
 export class Index {

   all(req: express.Request, res: express.Response, next: express.NextFunction){
     res.json("{title:'index', message:'All: Index'}");
   }

   get(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'index', message:'GET: Index'}");
   	}

   	post(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'index', message:'POST: Index'}");
   	}

   	put(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'index', message:'PUT: Index'}");
   	}

   	delete(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'index', message:'DELETE: Index'}");
   	}
   	patch(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'index', message:'PATCH: Index'}");
   	}
   	options(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'index', message:'OPTIONS: Index'}");
   	}
   	head(req: express.Request, res: express.Response, next: express.NextFunction){
   		res.json("{title:'index', message:'HEAD: Index'}");
   	}

 }
}
export = Route;
