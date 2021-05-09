# programmers Lv1

## 소수만들기
최근에 공부한 알고리즘으로 풀어보았다.   
재귀적으로 호출하며 이전 인덱스를 참조하지 않게끔 구현   
이런 유형을 좀 더 많이 공부해봐야할 듯...

```javascript

function solution(nums){
  let answer = 0;
  let basket = [];//임시적으로 담을 값들을 만들어 주는 배열 
  const numsL = nums.length;
  
  function go(idx, start){ // 몇 번쨰 인덱스를 채울 것인지, 어디 인덱스부터 시작할 것인지
    if(idx === 3){
      const ans = basket.reduce((x , y) => x+y);
      if(isPrime(ans))
        answer ++;
      return
    }
    for(let i = start; i < numsL; i++){
      basket[idx] = nums[i];
      go(idx + 1, i + 1);
    }

  }

  go(0,0);
  return answer;
}

function isPrime(n){
    if(n == 1){
      return false;
    }
    for (let i = 2; i * i <= n ; i++){
      if(n % i === 0){
        return false;
      }
    }
    return true;
  }
```

## 키패드
```javascript
function solution(numbers, hand) {
  hand = hand === "left" ? "L" : "R";
  let lH, rH;
  let answer = numbers.map((x, idx) => {
    // console.log();

    if (x % 3 === 1) {
      lH = x;
      return "L";
    }
    if (x % 3 === 0 && x !== 0) {
      rH = x;
      return "R";
    }
    lH = lH === undefined ? 10 : lH;
    rH = rH === undefined ? 12 : rH;
    const lPos = [
      Math.floor((lH === 0 ? 10 : lH - 1) / 3),
      (lH === 0 ? 10 : lH - 1) % 3,
    ];
    const rPos = [
      Math.floor((rH === 0 ? 10 : rH - 1) / 3),
      (rH === 0 ? 10 : rH - 1) % 3,
    ];
    const xPos = [
      Math.floor((x === 0 ? 10 : x - 1) / 3),
      (x === 0 ? 10 : x - 1) % 3,
    ];
    const lPosFromX = Math.abs(xPos[0] - lPos[0]) + Math.abs(xPos[1] - lPos[1]);
    const rPosFromX = Math.abs(xPos[0] - rPos[0]) + Math.abs(xPos[1] - rPos[1]);
    if (lPosFromX > rPosFromX) {
      rH = x;
      return "R";
    } else if (lPosFromX < rPosFromX) {
      lH = x;
      return "L";
    } else {
      if (hand === "R") {
        rH = x;
        return "R";
      } else {
        lH = x;
        return "L";
      }
    }
  });

  return answer.join('');
}
```   

## 폰켓몬

```javascript
function solution (nums){
  const temp = [...new Set(nums)].length;
  const maxVal = nums.length / 2;
  return maxVal > temp ? temp : maxVal ;
}
```

## 체육복

```javascript
function solution(n, lost, reserve) {
  for (let i = lost.length - 1; i > -1; i--) {
    const prevIdx = reserve.indexOf(lost[i] - 1);
    const curIdx = reserve.indexOf(lost[i]);
    const nextIdx = reserve.indexOf(lost[i] + 1);

    if (curIdx > -1) {
      reserve.splice(curIdx, 1);
      continue;
    }
       if (nextIdx > -1) {
      reserve.splice(nextIdx, 1);
      continue;
    }
    if (prevIdx > -1 && !lost.includes(lost[i] - 1)) {
      reserve.splice(prevIdx, 1);
      continue;
    }
   
    n--;
  }
  return n;
}
```