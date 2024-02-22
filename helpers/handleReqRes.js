// dependencies
const url = require('node:url');
const { StringDecoder } = require('node:string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handling
  // get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  //  find and replace leading or trailing slashes in a string
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder('utf-8');
  let realData = '';

  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();
    console.log(realData);
    // response handle
    res.end('Hello World');
  });
};

module.exports = handler;
