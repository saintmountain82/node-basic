/* eslint-disable no-new */
/* eslint-disable no-console */
// @ts-check

// new Promise((resolve, reject) => {
//   console.log('Inside promise');
//   reject(new Error('First Reject'));
//   resolve('First Resolve');
//   console.log('after resolve');
// })
//   .then((value) => {
//     console.log('Inside first then');
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(`${error}`);
//   });
// console.log('-------------------------------------------------');
// new Promise((resolve, reject) => {
//   console.log('Inside promise');
//   resolve('First Resolve');
//   console.log('after resolve');
//   reject(new Error('First Reject'));
// })
//   .then((value) => {
//     console.log('Inside first then');
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(`${error}`);
//   });
// console.log('-------------------------------------------------');
// new Promise((resolve, reject) => {
//   console.log('Before resolve');
//   setTimeout(() => {
//     resolve(Math.random());
//     console.log('After resolve');
//   }, 1000);
// })
//   .then((value) => {
//     console.log('then 1');
//     console.log(`value : ${value}`);
//   })
//   .then(() => {
//     console.log('then2');
//   })
//   .then(() => {
//     console.log('then3');
//   });
function returnPromiseForTimeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 1000);
  });
}

returnPromiseForTimeout()
  .then((value) => {
    console.log('1', value);
    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log('2', value);
    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log('3', value);
    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log('4', value);
    return returnPromiseForTimeout();
  })
  .then((value) => {
    console.log('5', value);
    return returnPromiseForTimeout();
  });

returnPromiseForTimeout();
