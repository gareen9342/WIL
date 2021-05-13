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