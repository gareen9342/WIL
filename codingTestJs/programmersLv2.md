## 멀쩡한 사각형
```javascript
function solution(w, h) {
  function gcd(min, max) {
    return min % max === 0 ? max : gcd(max, min % max);
  }

  const min = w > h ? h : w;
  const max = w > h ? w : h;

  return w * h - (w + h - gcd(min, max));
}
```

## 짝지어 제거하기
```javascript
function solution(s)
{
    if(s.length % 2 === 1){
        return 0;
    }
    const sArr = [...s];
    const stack = [];

    for(let i = 0; i<sArr.length; i++){
        const x = sArr[i];
        if(x === stack[stack.length - 1]){
            stack.pop();
        }else{
            stack.push(x);
        }
    }
    
    return stack.length ? 0 : 1;
}
```

## 오픈채팅방
```javascript

function solution(record) {
  var answer = [];
  let ids = {}
  //일단 한 번 순회해서 id값만 해시에 넣을건데 
  record.map(x => {
    const tempArr = x.split(" ");// 요소 한 개를 의미
    if(tempArr[0] == "Change" || tempArr[0] == "Enter" ){
      ids[tempArr[1]] = tempArr[2];
    }
    if(tempArr[0] !== "Change"){
      answer.push([...tempArr]);
    }
  })

  return answer.map(x => `${ids[x[1]]}님이 ${x[0] === "Enter" ? "들어왔습니다." : "나갔습니다."}`);
}

```   

## 타켓 넘버
```javascript
function solution(numbers, target){

  let result = 0;
  dfs(0)
  numbers[0]*=-1;
  dfs(0)
  function dfs (n){
    // console.log(n)
    if ( n < numbers.length - 1) {
      numbers[n + 1] *= 1;
      dfs(n + 1);
      numbers[n + 1] *= -1;
      dfs(n + 1);
    } else {
      const res = numbers.reduce((x,y) => x + y);
      // console.log(res, numbers)
      if(res === target){
        result ++
      }

    }
  }
  return result;
}

```

## 행렬의 곱셈

```javascript
function solution(arr1, arr2) {
  const answer = new Array(arr1.length).fill().map(x=>new Array(arr2[0].length))

  for( let i = 0; i < answer.length ; i++ ){
    for(let j = 0; j < answer[i].length; j++ ){
      let temp = 0;
      for(let n = 0; n < arr1[i].length; n++){
        temp += arr1[i][n] * arr2[n][j];
      }
      answer[i][j] = temp;
      // console.log(temp, i,j)
    }
  }

  return answer;
}

```


## 예상 대진표
```javascript
function solution(n,a,b){

  let count = 0;
  
  while(count < n){
    a = Math.ceil(a/2);
    b= Math.ceil(b/2);
    count ++;
    if(a === b) break;
  }

  return count;
  
}
```

## 가장 큰 수
```javascript
function solution(numbers) {
  const answer = numbers
    .map((i) => i + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
```
## 소수 찾기

```javascript
function next_permutation(a){
  let i = a.length-1;
  while(i > 0 && a[i-1] >= a[i]) {
      i -= 1
  };
  if(i<=0) return false; // 마지막 순열 판단하기
  let j = a.length-1;
  while(a[j] <= a[i-1]) j -= 1;
  // === swap;
  a[j] = [a[i - 1], a[i-1] = a[j]][0];
    j = a.length - 1
    while(i < j){
      a[j] = [a[i], a[i] = a[j]][0]
        i+=1; j-=1;
    }
    // console.log(arr)
    return true
}
function isPrime(n){
    if(n <= 1){
        return false;
    }
    for (let i = 2; i * i <= n ; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
function solution(numbers){
    const arr = [...numbers];
    const arrL = arr.length;
    const primeNums = [];

    for(let i = 1; i < (1 << arrL); i++){
        let temp = "";
        for(let j = 0; j<arrL; j++){
            if(i & (1 << j)){
                temp += arr[j]
            }
        }

        if(temp.length == 1 && isPrime(+temp)){
            primeNums.push(+temp)
        }else{
            const tempArr = [...temp].sort()

            do{
                const number = +tempArr.join('')
                if(isPrime(number)){
                    primeNums.push(number)
                }
            }while(next_permutation(tempArr))
        }
    }
    return new Set(primeNums).size
}


console.log(solution("17"))
console.log(solution("011"))
```

## 프린터
```javascript
function solution(priorities, location) {
  const pArr = priorities.map((idx, x) => [x, idx]);

  let count = 0;
  while (pArr.length ) {
    const temp = pArr[0];
    const isBiggerExist = pArr.find((x) => x[1] > temp[1]);
    if (!!isBiggerExist) {
      pArr.push(temp);
    } else {
      count++;
      if (temp[0] === location) {
        return count;
      }
    }
    pArr.shift();
    // console.log(pArr[0]);
  }
}
```