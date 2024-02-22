// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(404, {
    message: 'Your requested URL is not found',
  });
};

module.exports = handler;
