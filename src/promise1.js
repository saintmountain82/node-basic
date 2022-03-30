/* eslint-disable no-console */
// @ts-check

const fs = require('fs');

// fs.readFile('.gitignore', 'utf-8', (error, value) => {
//   console.log(value);
// });

/**
 * @param {fs.PathOrFileDescriptor} filename
 */
function readFileInPromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (error, value) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
}

readFileInPromise('.gitignore').then((value) => console.log(value));
fs.promises.readFile('.gitignore', 'utf-8').then((value) => console.log(value));
