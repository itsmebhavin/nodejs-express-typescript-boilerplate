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

  ![Alt text](/assests/packages.png?raw=true "packages.json")

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

![Alt text](/assests/tsconfig.png?raw=true "tsconfig.json")


#### Setting up your Linting using tslint
Create tsling.json file under root directory for defining linting rules.

![Alt text](/assests/tslint.png?raw=true "tslint.json")

#### Setting up Gulp file
Create gulpfile.js at your root level which will handle all gulp compilation and cleaning work.

![Alt text](/assests/gulpfile.png?raw=true "gulpfile.json")

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

![Alt text](/assests/server.png?raw=true "server.json")
