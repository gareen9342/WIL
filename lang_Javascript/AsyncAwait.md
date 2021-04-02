# Async Await

## Async & Await이란?

→ 비동기문법을 처리할 수 있는 최신 자바스크립트 문법

1. 함수의 앞에 Async라는 예약어
2. 비동기 통신코드 앞에 await을 붙인다. 

## 예외처리

→ try & catch & finally

→ 예외처리를 catch 로 잡아낼 수 있다

```jsx
async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

async function run() {
    try {
        await thisThrows();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('We do cleanup here');
    }
}

run();

// Output:
// Error: Thrown from thisThrows()
```

## 주의사항

### Async function 으로 부터 return 받을 때

```jsx
async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

async function myFunctionThatCatches() {
    try {
        return thisThrows();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('We do cleanup here');
    }
    return "Nothing found";
}

async function run() {
    const myValue = await myFunctionThatCatches();
    console.log(myValue);
}

run();
```

예상되는 결과값은 

"We do cleanup here"

"Nothing Found"

일 수도 있겟지만 사실 UnhandledPromiseRejection 이 리턴된다.

이유

→thisThrows()가 async 메서드이다.

→ 우리는 thisThrows 에서  에러를 발생시킨다. 그런데 우리는 rejected  된 promise 를 펑션으로 리턴 받는다. 

**→ 결국 이 리턴 값이 await 키워드로 직결되고,  await은 rejected를 리턴 받았음을 알고 마치 핸들링 되지 않은 프로미스 rejection 처럼 에러를 전파시킨다.** 

**결국 return 을 받는 구문을 try 내에 await과 함께 쓰고 블록 바깥에 에러 처리를 하는 것이 맞는 것이다.**

— 해결 방법 —

```jsx
async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

async function myFunctionThatCatches() {
    try {
        return await thisThrows(); // <-- Notice we added here the "await" keyword.
    } catch (e) {
        console.error(e);
    } finally {
        console.log('We do cleanup here');
    }
    return "Nothing found";
}

async function run() {
    const myValue = await myFunctionThatCatches();
    console.log(myValue);
}

run();

// Outptut:
// Error: Thrown from thisThrows()
//   ...stacktrace
// We do cleanup here
// Nothing found
```

참고 : [https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a](https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a)