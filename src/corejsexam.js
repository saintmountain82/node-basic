/* eslint-disable no-console */
// @ts-check

require('core-js');

const complicatedArray = [1, [2, 3]];
const flatendArray = complicatedArray.flat();

// eslint-disable-next-line no-console
console.log(flatendArray);

const original = 'acbacb123';
const changed = original.replaceAll('acb', '123');
console.log(changed);

/**
 * @param {number | undefined} duration
 */
function sleep(duration) {
  return new Promise((resolve) => {
    console.log('sleep start');
    setTimeout(() => {
      console.log('sleep done', duration);
      resolve(null);
    }, duration);
  });
}

function alwaysReject() {
  return new Promise((resolve, reject) => {
    const newLocal = 'null';
    reject(newLocal);
  });
}

Promise.all([sleep(1000), sleep(1500), sleep(2000), alwaysReject()]).then(
  (value) => {
    console.log('Promise all done!', value);
  }
);
