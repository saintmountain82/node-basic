const objs = [
  {
    foo: {
      bar: 1,
    },
  },
  {},
  {
    foo: {},
  },
];

console.log(
  objs.map((obj) => {
    const { foo } = obj;
    if (foo) {
      const { bar } = foo;
      if (bar) {
        return bar;
      }
    }
    return undefined;
  })
);

console.log(objs.map((obj) => obj.foo?.bar));
