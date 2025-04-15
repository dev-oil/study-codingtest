// promise 내부 동작을 구현해보자.
// step 1 - resolve() 와 reject() 구현
// step 2 - then() 구현
// step 3 - catch() 구현
// step 4 - 비동기 처리를 위한 큐(Queue)처리 추가

// promise의 특징
// state:
// pending(대기) -> resolve 시 fulfilled / reject 시 rejected

// result:
// undefined -> resolve 시 value / reject 시 error

// then()에서 resolve()의 결과를 받아야 함
// catch()에서 reject()의 결과를 받아야 함

// keyword - new Promise 에 전달되는 함수 - executor 라고 부름

class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // "pending", "fulfilled", "rejected"
    this.value = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;

        this.onFulfilledCallbacks.forEach((callback) => {
          try {
            callback(this.value);
          } catch (error) {
            reject(error);
          }
        });
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.value = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          try {
            callback(this.value);
          } catch (error) {
            reject(error);
          }
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleFulfilled = () => {
        try {
          const result =
            typeof onFulfilled === 'function'
              ? onFulfilled(this.value)
              : this.value;
          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = () => {
        try {
          const result =
            typeof onRejected === 'function'
              ? onRejected(this.value)
              : this.value;
          reject(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        handleFulfilled();
      } else if (this.state === 'rejected') {
        handleRejected();
      } else {
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected) {
    return new MyPromise((resolve, reject) => {
      const handleCatch = () => {
        try {
          const result = onRejected(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'rejected') {
        handleCatch();
      } else if (this.state === 'pending') {
        this.onRejectedCallbacks.push(handleCatch);
      }
    });
  }
}

// ===================== 기본 프라미스 예제 ================
// const successPromise = new MyPromise((resolve) => {
//   setTimeout(() => resolve('성공!'), 2000); // 2초 후 성공
// });

// console.log('1. 실행 시작');

// successPromise.then((result) => {
//   console.log('2. then 실행:', result);
// });

// console.log('3. 실행 끝');

// ===================== 체이닝 + 실패 프라미스 예제 ================
// const failPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('2초 후 reject 호출');
//     reject('❌ 실패');
//   }, 2000);
// });

// console.log('초기 상태: pending');

// failPromise
//   .then((value) => {
//     console.log('then 실행:', value);
//   })
//   .catch((error) => {
//     console.log('catch 실행:', error);
//   });

// console.log('프로미스 생성완료');

// ===================== 체이닝 2개 이상 프라미스 예제 ================
// const promise = new MyPromise((resolve, reject) => {
//   console.log('1. executor 실행');
//   setTimeout(() => {
//     console.log('2. 1초 후 resolve 호출');
//     resolve(1);
//   }, 1000);
// });

// promise
//   .then((value) => {
//     console.log('3. 첫 번째 then: ', value);
//     return value + 1;
//   })
//   .then((value) => {
//     console.log('4. 두 번째 then: ', value);
//     return value + 1;
//   })
//   .then((value) => {
//     console.log('5. 세 번째 then: ', value);
//   });
