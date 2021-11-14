# Async Await 2

[async와 await를 사용하여 비동기 프로그래밍을 쉽게 만들기 - Web 개발 학습하기 | MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Async_await#rewriting_promise_code_with_asyncawait)    

async, await 은 ECMA2017에 추가되었습니다.    

이 기능들은 기본적으로 비동기 코드를 쓰고 Promise를 더 읽기 쉽도록 만들어 줍니다.    

## 사용법

**async 를 사용하면 비동기 함수를 만들 수 있습니다. Promise를 리턴 받을 수 있다는 게 특징입니다.**    

일반 함수에 async 를 붙이면 Promise를 리턴받을 수 있습니다. (fulfilled)    

Promise 상태값인 fulfilled만을 받기 때문에 반환된 값을 사용하기 위해선 .then()을 사용해야 합니다.    

Promise기반의 함수 앞에는 await을 놓을 수 있습니다.     

**promise함수가 fulfiled될 때까지 잠시 중단하고, 결과를 반환합니다.(보통 변수에 할당합니다.)**    

**실행을 기다리는 다른 코드들을 중지시키지 않고 그대로 실행되게 합니다.**     

## Promise code를 async, await로 사용해보자

```jsx
fetch('coffee.jpg')
.then(response => response.blob())
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

→ 

```jsx
async function myFetch() {
// 1. : fetch("coffee.jpg");의 결과가 반환될 때까지 기다린다. 이후의 함수들은 아직 실행 안된다.
// 해당 함수 블록 외부의 동기 함수들은 실행이 된다
  let response = await fetch('coffee.jpg');
// 2. 또 다른 비동기 함수엔 Blob이 실행이 된다. myBlob에 리턴값이 할당이 된다면 아래의 함수 실행, 결과 리턴해준다. 
  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}
//==============================================
myFetch() // MyFetch와 같은 ㅏ함수는 promise가 리턴되기 때문에 then으로 체이팅이 가능하다.     
.catch(e => {
  console**.log('There has been a problem with your fetch operation: ' + e.message);
});**
```

1. fetch("coffee.jpg");의 결과가 반환될 때까지 기다린다. 이후의 함수들은 아직 실행 안된다.    
해당 함수 블록 외부의 동기 함수들은 실행이 된다    
2. 또 다른 비동기 함수엔 Blob이 실행이 된다. myBlob에 리턴값이 할당이 된다면 아래의 함수 실행, 결과 리턴해준다.     
3. MyFetch와 같은 함수는 promise가 리턴되기 때문에 then으로 체이닝이 가능하다.    

## 오류 처리

try catch finally를 쓰면 좀 더 동기식 코드처럼 보이고 직관적으로 설명할 수 잇다.     

```jsx
const myFetch = async () => {
	try {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let myBlob = await response.blob();
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);

  } catch(e) {
    console.log(e);
  }
}
```

## 단점

동기식 코드처럼 보이고 다른 일들은 실행이 되지만 그 함수 내부에서는 느려질 수 있다.     

→ _해결법 : 모든 Promise 코드를 변수에 저장 후에 실행할 수 있다._     
이렇게 하면 다음 비동기 함수를 기다리지 않고 실행할 수 있다.     

예를 들면, 3초가 걸리는 비동기 함수 timeoutPromise가 있다고 치면    

```jsx
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
```

→ 총 9초

```jsx
async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}
```

→ 3초에 가까운 작업 왜냐면 거의 3가지 일이 동시에 실행이 되었기 때문이다.     

## class 내부 메서드에 할당.

```jsx
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
```

→ 위의 메서드를 이렇게 사용할 수 있다.    

```jsx
han.greeting().then(console.log);
```