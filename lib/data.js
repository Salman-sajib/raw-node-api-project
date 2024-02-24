// dependencies
const fs = require('node:fs');
const path = require('node:path');

const lib = {};

// base diractory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create = function (dir, file, data, callback) {
  // open file to wirte data
  fs.open(
    lib.basedir + dir + '/' + file + '.json',
    'wx',
    function (err, fileDescriptor) {
      if (!err && fileDescriptor) {
        // convert data to string
        const stringData = JSON.stringify(data);

        // write data to file then close it
        fs.writeFile(fileDescriptor, stringData, function (err) {
          if (!err) {
            fs.close(fileDescriptor, function (err) {
              if (!err) {
                callback(false);
              } else {
                callback('Error closing the new file');
              }
            });
          } else {
            callback('Error writing to new file');
          }
        });
      } else {
        callback('Could not create new file, it may already exists!');
      }
    }
  );
};

module.exports = lib;
