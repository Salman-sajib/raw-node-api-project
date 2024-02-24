// dependencies
const http = require('node:http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enviroment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file will erase later
data.create(
  'test',
  'newFile',
  { name: 'Bangladesh', language: 'bangle' },
  function (err) {
    console.log(`error was`, err);
  }
);

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
