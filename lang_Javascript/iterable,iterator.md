# iterable, iterator

> 기존과 달라진 ES6 에서의 리스트 순회 방법인 for of로 자료를 순회할 수 있게 해준다.   
iterator를 호출 가능하게 해준다.   

```javascript
const list = [1,2,3];
const str = "123";
for(const a of list){
	log(a); // 1->2->3
}
for(const a of str){
	log(a); // 1->2->3
}
```

Array가 아닌 Set, Map (자바로 따지면 순서가 없는 자료구조)도 for of 가 가능하다   

근데 인덱스를 키로 사용하여 접근하려 하면 불가능하다. → 그런 자료구조, 하지만 keys나 values로    

Symbol.iterator : ES6에서 추가된 것. ***이건 객체의 해당 키에 담겨 있다.***    

Array[Symbol.iterator] 로 콘솔에 확인하게 되면 array에 저 키 값에 접근시 함수 (values())가 들어있음을 확인할 수 있다.    

***그리고 저 값을 다시 null로 초기화 하게 될 경우 for of 사용시 array is not iterable 이란 에러를 뱉게 된다.** S*et, Map도 마찬가지 이다.     

어떤 이터러블 객체의 [Symbol.iterator]에는 그 객체를 순회가능하게 해주는 어떤 함수가 들어있음을 예상할 수 있다.   

## iterable

이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값    
→ Symbol.iterator()를 이용하면 iterator를 가지고 올 수 있다.

## iterator

→ {value, done} 객체를 리턴하는 next() 를 가진 값     
그리고 이 이터레이터는 next 호출로 다음의 요소를 갖고 올 수 있다.      

## 이터러블 , 이터레이터 프로토콜

리터러블을 for...of 전개연산자 등과 함께 동작하도록 한 규약     
내부적으로 이것이 구현되어 있으면 for...of로 구현 가능하다.     
많은 오픈 소스 라이브러리들 중 순회가 가능한 것들은 내부적으로 이것을 따르도록 구현이 되어있음. (ex.immutable.js, WebAPIs...)    

## 자바스크립트의 for문과 관련된 글    

[ES6의 심볼, 이터레이터, 제네레이터에 대해 알아보자](https://gist.github.com/qodot/ecf8d90ce291196817f8cf6117036997)