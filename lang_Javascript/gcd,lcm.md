# 최대 공약수, 최소 공배수

최대 공약수 : 모든 값을 대입하며 나머지가 0인 약수를 찾고 그 중 가장 큰 수를 구하면 되지만 사실 모든 값을 대입할 필요가 없다. 

처음부터 하나씩 구한 다면 이런 식으로 풀이할 수 있다. 
```javascript
 function solution(n, m) {
 let nYak = new Set();
 let mYak = new Set();
 for (let i = 1; i * i <= n; i++) {
   // console.log(i);
   if (n % i == 0) {
     nYak.add(i);
     nYak.add(n / i);
   }
 }
 for (let i = 1; i * i <= m; i++) {
   if (m % i == 0) {
     mYak.add(i);
     mYak.add(m / i);
   }
 }
 // 두 집합의 교집합이 공약수.
    const intersection = [...nYak].filter((x) => mYak.includes(x));
  var answer = [
    intersection[intersection.length - 1],
    (n * m) / intersection[intersection.length - 1], // 최대 공배수는 두 수를 곱해서 최대공약수로 나눈 것. 
  
  return answer;
}
```

   
또한 사실은 알고리즘 풀이에 많이 쓰이는 이런 재귀적 풀이도 있다. 

```javascript
function gcdlcm(a, b) {
    var answer = [];
    var minNum = Math.min(a, b);
    var maxNum = Math.max(a, b);
    answer[0] = gcd(minNum, maxNum);
    answer[1] = lcm(minNum, maxNum);
    return answer;
}
// 최대공약수
function gcd(minNum, maxNum){
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum){
  return minNum * maxNum / gcd(minNum, maxNum);
}

```