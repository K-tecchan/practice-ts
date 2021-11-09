const doSomething = (): never => {
  throw 'never';
  console.log('doSomething');
};

let foo: any = undefined;
console.log(foo.bar());
