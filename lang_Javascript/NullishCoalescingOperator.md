# null(nullish coalescing operator) 
(Null 병합 연산자)
> 확실한 defined된 값을 찾고 싶을 때 유용하게 쓰일 수 있다. not null && not undefined값 찾기.    

출처 : [null 병합 연산자 '??'](https://ko.javascript.info/nullish-coalescing-operator)

a ?? b 
***위의 연산에서 a가 not null && not undefined일 경우 a 그 외엔 b *** 


`x = (a !== null && a !== undefined) ? a : b;`

```jsx
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛
```

## ?? 와 ||의 차이

|| 는 첫 번째  truthy값을 리턴

?? 는 첫 번째 정의된 (defined)값을 리턴

```jsx
let height = 0;
height || 100 // 100
height ?? 100 // 0
```

|| 가 0 을 falsy하다고 취급하여 위에선 100이 나오게 된다.  

## 제약

안정성 관련 이슈로 인해 &&나 ||과 함께 사용하지 못한다.    

```jsx
let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'
```

개선하기

```jsx
let x = (1 && 2) ?? 3; // 제대로 동작합니다.

alert(x); // 2
```