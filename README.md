# Express server on Typescript

This project is a seed project to make an express server with Typescript using tsc and webpack.

The project structure is
~~~
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── main.ts
│   ├── router
│   │   └── routes.ts
│   └── server
│       └── server.ts
├── tsconfig.json
└── webpack.config.js
~~~

## Name convention
The structure under the *src* folder may change as you wish, but must contain a file called *main.ts* that is the application entrypoint.

## Usage
First, you must install the node modules. Open a terminal on the application folder and type `npm install`. When the download finish, you can use the following commands:

- `npm run build-webpack`: Transpile the typescript code to javascript using webpack.
- `npm run build`: Tranpile the typescript code to javascript using the typescript compiler.
- `npm start`: Execute the application.
- `npm run dev`: Execute the application with nodemon. Useful to develop the application.
