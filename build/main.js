(() => {
  // src/esbuildexam.js
  var objs = [
    {
      foo: {
        bar: 1
      }
    },
    {},
    {
      foo: {}
    }
  ];
  console.log(objs.map((obj) => {
    const { foo } = obj;
    if (foo) {
      const { bar } = foo;
      if (bar) {
        return bar;
      }
    }
    return void 0;
  }));
  console.log(objs.map((obj) => {
    var _a;
    return (_a = obj.foo) == null ? void 0 : _a.bar;
  }));
})();
