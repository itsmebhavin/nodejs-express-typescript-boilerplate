## Node.js, Express REST API development with TypeScript
##### Sample boilerplate project for node.js, express using TypeScript and Gulp.

### Why TypeScript?
I believe that TypeScript has been embraced as the choice language for building next generation web application using ECMAScript 6 (ES6) with strong typing. Strong typing doesn’t necessarily improve the JavaScript that your Node.js server will execute, or the JavaScript that your browser might execute. However, it provides the developer more insight into public and 3rd party APIs as well as reducing the bugs (and development cycle to check for bugs) in the software we are developing.

### Looking for Node-Express-ES6?
```
https://github.com/bapatel1/nodejs-express-es6-boilerplate
```

### Tools and middleware used
  - TypeScript
  - express
  - Node.js 6.x
  - Gulp

  ![packages.json](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/packages.png?raw=true "packages.json")

#### Setting up TypeScript
- You’ll need some global tools too. You might need to run these as sudo or “Run As Administrator” if you’re using windows.
```
npm install --global typescript gulp tsd
```
typescript is our global typescript compiler
gulp is a build tool that’s crazy popular now and will help us create beautiful expressive build commands
tsd is a package manager for downloading TypeScript definition files. We’ll primarily use this for expressjs


#### Setting up tsconfig.json
Create tsconfig.json file at root level. This tells our typescript compiler some information about how to compile our .ts extension files. You can read more about tsconfig.json files here.

![tsconfig.json](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/tsconfig.png?raw=true "tsconfig.json")


#### Setting up your Linting using tslint
Create tsling.json file under root directory for defining linting rules.

![tslint.json](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/tslint.png?raw=true "tslint.json")

#### Setting up Gulp file
Create gulpfile.js at your root level which will handle all gulp compilation and cleaning work.

![gulpfile.js](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/gulpfile.png?raw=true "gulpfile.json")

#### Server Setup
Now let’s start moving towards actual ./Src folder and actual server setup code.

In our src directory. We’ll need to start a typescript definition file.

```
cd src
tsd init -y
```

This will create one file “tsd.json” and one folder “typings” in your src folder. Now we’ll install express’s typescript definition with:

```
cd src
tsd install express –s
tsd install body-parser –s
```

#### Main server.ts file setup
Create server.ts file under ./src for server setup.

![import](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/import1.png?raw=true "import1.ts")

#### Let’s define our first class “HttpServer”
– it will initiate and define express app
– handle bootstrapping express app
– handle defining routes
– and basic express configurations

![class](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/class.png?raw=true "class.ts")

![Express configurations](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/configuration.png?raw=true "configuration.ts")


![import](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/import2.png?raw=true "import2.ts")


![routes](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/routes.png?raw=true "routes.ts")

We will get to the route files later on but first let’s start server and finish our server.ts coding


![Server](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/server.png?raw=true "server.ts")

Helper functions like “onError” and “onListening” are here –

![helper](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/helper.png?raw=true "helper.ts")


#### Setting up Express Routes

- We have two routes – Index and Users for example.
  -   Create “routes” folder under “src” folder which will have our routes.
  -   Create Index.ts and Users.ts files inside routes folder.

![index](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/index.png?raw=true "index.ts")


![users](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/users.png?raw=true "users.ts")


#### Final Run and build
```
> npm run gulp  or gulp build
> npm run start
```

![postman](https://github.com/bapatel1/nodejs-express-typescript-boilerplate/blob/master/assests/postman.png?raw=true "postman")


##### Repository
```
https://github.com/bapatel1/nodejs-express-typescript-boilerplate
```

##### Blog
```
https://itsmebhavin.wordpress.com/
```
