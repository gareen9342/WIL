# Promise.all

출처 : https://velog.io/@minsangk/2019-09-06-0209-%EC%9E%91%EC%84%B1%EB%90%A8-eik06xy8mm

Promise 를 중간에 거부(reject or Exception)가 발생하더라도 다 실행하려면 Promise.all   
거부 발생시 중도에 중단하려면 Promise.race    

reject 발생에도 다 실행할 때 => Promise.allSettled    
하나라도 reject 시 멈출 때 (모든 Promise 가 resolve 됐을 때를 보장) => Promise.all   
resolve / reject 여부 상관없이 가장 먼저 수행된 결과를 받아올 때 => Promise.race


> Promise.all, Promise.allSettled, Promise.race    
> 3개 다 병렬적으로 프로미스 함수를 처리할 때 이용하면 좋다.   
> 복호화나, 파일 I/O처리와 같은 비동기이면서 시간이 좀 걸리는 함수들은 이를 이용해 병렬 처리를 수행하여 시간을 절약해준다.     
> Promise.all과 Promise.allSettled는 에러 발생시 어떻게 처리하느냐의 차이도 있지만, 리턴값, 에러 발생 시점도 다르다.    

## Promise.all  
: all or nothing

## Promise.allSettled()
: 일단 모두 수행하는 것을 보장해줌. 에러가 있어도.. 리턴값이 위와 달라 조심해야함.

```javascript
const promise1 = async() => "promise"
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'))

Promise.all([promise1, promise2]).then((results) => {}).catch(err => console.error(err.message))
Promise.allSettled([promise1, promise2]).then((results) => {}).catch(err => console.error(err.message))
```

Promise.allSettled와 같은 경우는 Promise함수의 resolve 값이 fulfilled 일 경우에는      
`[{value: 리턴값, status : fulfilled}, ...]`      
rejected 일 경우에는     
` [{ reason : 이유 , status : rejected }, ... ]`


## Promise.all with map function
다량의 I/O처리를 할 때는 이렇게 일단 구현중이다..

```javascript
const sampleArray = ["a","b","c","d"]
    
...

await Promise.all(sampleArray.map(async() => {
    await Promise1()
    await Promise2()
}))


```