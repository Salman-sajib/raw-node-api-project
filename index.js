// dependencies
const http = require('node:http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enviroment = require('./helpers/environments');

// app object - module scaffolding
const app = {};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(enviroment.port, () => {
    console.log(`Listening to port ${enviroment.port}`);
  });
};

// handle Request and Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
