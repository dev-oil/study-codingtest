class MyPromise {
  constructor() {}

  then() {}

  catch() {}
}

const x = new MyPromise((resolve) => setTimeout(resolve, 100));
x.then(() => {}).catch(() => {});

// promise가 무슨 문제를 해결할 수 잇는지
