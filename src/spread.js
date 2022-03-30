const arr = [1, 2, 3, 4, 5];

const [head, ...rest] = arr;

console.log(head, ...rest);

const personalData = {
  email: 'abe@email.com',
  password: '****',
};

const publicData = {
  nickanme: 'foo',
};

const overrides = {
  email: 'ffff@fff.com',
};

const user = {
  ...personalData,
  ...publicData,
  ...overrides,
};

console.log(user);

function foo(head, ...rest) {
  console.log(head);
  console.log(rest);
}

foo(1, 2, 3, 4, 5);
