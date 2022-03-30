function foo() {
  let x = 1;
  function bar() {
    console.log(x);
  }
  bar();
}

foo();

function foo2() {
  const x = 'Hello';
}
// console.log(x);

var y = 1;
if (true) {
  var y = 2;
}

console.log(y);

foo2();

function and(x) {
  return function print(y) {
    return x + ' and ' + y;
  };
}

const saltAnd = and('salt');
console.log(saltAnd('pepper'));
console.log(saltAnd('sugar'));
