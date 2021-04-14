# 월간코드 챌린지


## 01
어떤 정수들이 있습니다. 
이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

-> 쉬워서 간단하게 계산했다~

```javascript
function solution(absolutes, signs) {
    let answer = 0;
    absolutes.map((x,idx) => {
        answer += signs[idx] ? x : -x;
    });
    return answer;
}

// console.log(solution([4,7,12], [true,false,true]))
// console.log(solution([1,2,3], [false,false,true]))
```
## 02
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 
예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.

만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 
예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 
이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때
s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 
solution 함수를 완성해주세요.

-> 이것 또한 올바른 괄호 같은 것은 많이 풀어본 상태라서 추가된 조건만 처리해주면서 풀이 
-> 대신에 스택의 값이 있는지 판별시에 그 곳에 비었는지 if문을 한 번 더 걸어주게 될 경우 연산속도가 10 ms까지도 차이가 나길래 그냥 그 부분을 벗기고 undefined일 때를 찾도록 하였다. 

```javascript
function solution(s) {
    var answer = 0;
    const arr = s.split("");
    for(let i = 0 ; i < arr.length; i++){
        let duplicatedArr = arr.slice();
        const removed = duplicatedArr.splice(0, i);
        const tempArr = [...duplicatedArr,...removed];
        if(isGualho(tempArr)){
            answer ++;
        }
    }
    return answer;
}
function isGualho(sArr){
    let temp = [];
    for(let i = 0 ; i < sArr.length; i++){
        const x = sArr[i];
        if(x == '(' || x == '[' || x == '{'){
            temp.push(x);
        }else if( x == ')' ){
            const popped = temp.pop()
            if( popped != '(' || popped == undefined){
                return false;
            }
            
        }else if( x == ']' ){
            const popped = temp.pop()
            if(popped !=='[' || popped == undefined){
                return false;
            }
            
        }else{
            const popped = temp.pop()
            if(popped !=='{'|| popped == undefined){
                return false;
            }
        }
    }
    return temp.length ? false :true;
}
```

console.log(solution("[](){}"))
console.log(solution("}]()[{"))
console.log(solution("[)(]"))
console.log(solution("}}}"))
console.log(solution("{{}}"))
console.log(solution("{{(("))

/**
 * 각 점에 가중치가 부여된 트리가 주어집니다. 당신은 다음 연산을 통하여, 이 트리의 모든 점들의 가중치를 0으로 만들고자 합니다.

임의의 연결된 두 점을 골라서 한쪽은 1 증가시키고, 다른 한쪽은 1 감소시킵니다.
하지만, 모든 트리가 위의 행동을 통하여 모든 점들의 가중치를 0으로 만들 수 있는 것은 아닙니다. 당신은 주어진 트리에 대해서 해당 사항이 가능한지 판별하고, 만약 가능하다면 최소한의 행동을 통하여 모든 점들의 가중치를 0으로 만들고자 합니다.

트리의 각 점의 가중치를 의미하는 1차원 정수 배열 a와 트리의 간선 정보를 의미하는 edges가 매개변수로 주어집니다. 주어진 행동을 통해 트리의 모든 점들의 가중치를 0으로 만드는 것이 불가능하다면 -1을, 가능하다면 최소 몇 번만에 가능한지를 찾아 return 하도록 solution 함수를 완성해주세요. (만약 처음부터 트리의 모든 정점의 가중치가 0이라면, 0을 return 해야 합니다.)

제한사항
a의 길이는 2 이상 300,000 이하입니다.
a의 모든 수는 각각 -1,000,000 이상 1,000,000 이하입니다.
a[i]는 i번 정점의 가중치를 의미합니다.
edges의 행의 개수는 (a의 길이 - 1)입니다.
edges의 각 행은 [u, v] 2개의 정수로 이루어져 있으며, 이는 u번 정점과 v번 정점이 간선으로 연결되어 있음을 의미합니다.
edges가 나타내는 그래프는 항상 트리로 주어집니다.

 * 
 * 
 * 입출력 예
a	edges	result
[-5,0,2,1,2]	[[0,1],[3,4],[2,3],[0,3]]	9
[0,1,0]	[[0,1],[1,2]]	-1
 */