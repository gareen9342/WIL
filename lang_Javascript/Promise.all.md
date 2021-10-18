# Promise.all
별 거 아닌데 정리해 놓은 게 꽤 쓸모있다

출처 : https://velog.io/@minsangk/2019-09-06-0209-%EC%9E%91%EC%84%B1%EB%90%A8-eik06xy8mm

Promise 를 중간에 거부(reject or Exception)가 발생하더라도 다 실행하려면 Promise.all   
거부 발생시 중도에 중단하려면 Promise.race    

reject 발생에도 다 실행할 때 => Promise.allSettled    
하나라도 reject 시 멈출 때 (모든 Promise 가 resolve 됐을 때를 보장) => Promise.all   
resolve / reject 여부 상관없이 가장 먼저 수행된 결과를 받아올 때 => Promise.race

-> 나중에 한 번 정리하자.