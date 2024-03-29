# 스코프 (Scope)

**변수의 유효 범위**

- _function 안에서 생성된 변수는 밖에서 이용할 수 없다._   
- _전역 변수와 같은 이름의 변수를 function 안에서 생성할 수 있다._    
- _function 안에서 생성된 변수는 밖에서 이용할 수 없다._   

## 전역 스코프 (Global scope)
변수가 함수 바깥에나 중괄호 바깥에 선언되었다면, 전역 스코프에 정의된다고 한다.    
웬만하면 하지 않는 것이 권장된다.   
어디서든지 참조할 수 있는 변수가 되는 것이고, 
하나의 html에서 두 개의 js파일을 로드해서 사용할 때에도 전역 변수는 사용이 가능하다. 

즉시 실행 함수를 이용해서 전역 변수를 해당 파일 (모듈)에서만 범위를 억제하는 방법들이 많이 쓰인다.

```javascript
(function(){
	var APP = APP || {};
	APP.info = {
		name : 'chat app', version : '1.2.1'
	};
	APP.Start = function() {
		// ....
	};
	console.log(APP.info.name); // chat app
})();

console.log(APP.info.name); // APP is not defined
```

## 지역 스코프 (Local Scope)
코드의 특정 부분에서만 사용할 수 있는 변수   
*함수스코프(function scope) 와 블록스코프(block scope)가 있다.*

### 함수 스코프(function scope)
함수 내부에서 변수를 선언시 그 변수는 선언한 변수 내부에서만 접근 가능.

### 블록 스코프(block scope)
중괄호({}) 내부에서 const 또는 let으로 변수를 선언시 블록스코프가 생긴다.

-> 또한, 함수를 선언시 중괄호를 사용하게 되므로 _블록스코프는 함수스코프의 서브셋이다._

## 함수 호이스팅(Function hoisting)과 스코프
함수가 함수 선언식으로 선언될시, 스코프의 최상단으로 호이스팅 된다.    
(호이스팅에 대해선 후에 좀 더 추가적인 공부를 할 예정이다. )   
그래서 선언 전에 그 함수를 사용하더라도 사용이 되는 이유이다.    
하지만 우리는 함수는 호출 전에 선언해야한다는 것을 알고있다.    
**함수 호이스팅의 경우는 사용하면 안된다.**


## 스코프 체인 
- _스코프 간에 상하 관계를 의미_    
- _스코프 체인은 내부 함수에서 변수를 찾기 위해 외부 함수로 접근할 때에 탐색을 하게 되는 관계를 말한다._  
- _스코프의 탐색은 해당 스코프 내부를 먼저 탐색하고 선언된 것이 없다면 한 단계 위의 스코프를 탐색하며 해당 변수를 찾을 때까지 반복적으로 이루어 진다. 이 과정은 해당 선언을 찾거나 null이 될 때 탐색을 멈춘다._   