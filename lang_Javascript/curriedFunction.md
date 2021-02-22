# curried function(커링함수) 이란 무엇인가?
-> 쉬운 개념으로는 커링은 함수 하나가 n개의 인자를 받는 과정을 n개의 함수로 각각의 인자를 받도록 하는 것이다.   
-> 부분적으로 적용된 함수를 체인으로 계속 생성해 결과적으로 값을 처리하도록 하는 것이 그 본질이다. 


예시를 들어봅시다. 
먼저 두 개의 파라미터를 가진 이 함수가 있다. 
```javascript
    const add = (x, y) => x + y; 
    add(2, 3) ; //=> 5
```

그리고 여기 커링 함수가 있다.   
```javascript
    const add = x => y => x + y;
```   

그리고 이 함수를 화살표 함수로 똑같이 만들면 이렇게 된다.

```javascript
const add = function (x) {
  return function (y) {
    return x + y;
  }
};
```   

**Focus on return**   
return에 초점을 맞추면 다른 방식으로 시각화 하는 것에 도움이 될 수 있다. 
우리는 화살표 함수가 이와 같이 작동한다는 것을 알고 있다. 

```javascript
const f = someParam => returnValue;
```   

그렇기에 우리는  add함수의 리턴값을 우리는 명확성을 위해 괄호를 사용할 수 있다. 
굵은 텍스트는 이 함수의 반환값이다. 

```javascript
const add = x => (y => x + y)
```
이것은 아래와 같다. 

```javascript
add(2) // returns (y => 2 + y)
```  

   
**커링 함수를 호출해보자**
따라서 커링 함수를 사용하려면 조금 다르게 호출해야합니다.

```javascript
add(2)(3)  // returns 5
```

첫 번째 외부 함수 호출이 두 번째 내부 함수를 반환하기 때문이다. 
두 번째 함수 호출을 한 후에야 실제로 결과를 얻는다. 

```javascript
const add2 = add(2) // returns function(y) { return 2 + y }
add2(3)             // returns 5
```

좋은 참고 문서 
*https://ko.javascript.info/currying-partials*