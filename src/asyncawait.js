const fs = require('fs');

/* eslint-disable no-console */
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, duration);
  });
}

async function main() {
  console.log('1');
  await sleep(1000);
  console.log('2');
  await sleep(1000);
  console.log('3');
  await sleep(1000);
  console.log('4');
  await sleep(1000);
}

main();

async function errorexam() {
  try {
    const result = await fs.promises.readFile('.gitignore', 'utf-8');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

errorexam();
