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

  then(onFulfilled) {
    return new MyPromise((resolve, reject) => {
      const handleCallback = () => {
        try {
          const result = onFulfilled(this.value);

          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        handleCallback();
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(handleCallback);
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

// const successPromise = new MyPromise((resolve) => {
//   setTimeout(() => resolve('성공!'), 2000); // 2초 후 성공
// });

// console.log('1. 실행 시작');

// successPromise.then((result) => {
//   console.log('2. then 실행:', result);
// });

// console.log('3. 실행 끝');

// const failPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('❌ 실패');
//   }, 2000);
// });

// console.log('초기 상태: pending');

// failPromise
//   .then((value) => {
//     console.log('이건 성공:', value);
//   })
//   .catch((error) => {
//     console.log('캐치가 실행이 안됨요 ㅠㅠㅠㅠㅠ:', error);
//   });

// console.log('프로미스 생성완');

// =============================== 원래 프로미스요,, ===============================

// const failPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('❌ 실패..');
//   }, 2000);
// });

// console.log('🚨 초기 상태: pending');

// failPromise
//   .then((value) => {
//     console.log('이건 성공:', value);
//   })
//   .catch((error) => {
//     console.log('캐치가 실행됨:', error);
//   });

// console.log('프로미스 생성 완료');
