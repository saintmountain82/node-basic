const { count } = require('console');

let numCounters = 0;

function getCounter() {
  numCounters += 1;

  let results = { count: count, total: 0 };
  function count() {
    results.total += 1;
  }
  return results;
}

const counterA = getCounter();
counterA.count();
counterA.count();

const counterB = getCounter();
counterB.count();

console.log(counterA.total, counterB.total, numCounters);
