# 클로저 (Closure)란?
함수(외부 함수)안에 작성된 함수(내부 함수)와의 관계
함수 내부에 함수를 작성시, 우리느 클로저를 작성한 것이다 다름이 없다.
클로저는 외부 함수의 변수를 이용할 수 있기 때문에 대게 리턴하여 사용한다. 

## 클로저의 대표적 기능

- 클로저를 통한 은닉화 (캡슐화, 은닉화)
클로저를 사용하여 외부에서 변수에 직접 접근하는 것을 제한할 수 있다. 

```javascript
    function hello(name) {
        var _name = name;
        return function() {
            console.log('Hello, ' + _name);
        };
    }
    var hello1 = hello('승민');
    var hello2 = hello('현섭');
    var hello3 = hello('유근');

    hello1(); // 'Hello, 승민'
    hello2(); // 'Hello, 현섭'
    hello3(); // 'Hello, 유근'
```

- 반복문의 클로저
함수 안의 변수는 실행될 때 결정된다.

```javascript
    for(var i = 0 ; i< 100; i++){
        setTimeout(() => {console.log(i)}, i * 1000)
    }
    // setTimeout(()=>{console.log(i)}, 0 * 1000)
    // setTimeout(()=>{console.log(i)}, 1 * 1000)
    // setTimeout(()=>{console.log(i)}, 2 * 1000)
```

- 해결 방법

```javascript
for (var i = 0; i < 100; i++) {
    function closer(j) {
        setTimeout(()=>{console.log(j)}, j * 1000)
    }
    closer(i);
}
// -> (즉시실행 함수)
for (var i = 0; i < 100; i++) {
    (function(j) {
        setTimeout(()=>{console.log(j)}, j * 1000)
    })(i)
}
```

- 클로저로 사이드 이펙트 제어하기

함수에서 값을 리턴할 때를 제외하고 무언가를 행할 때 사이드 이펙트가 발생한다. 
**Ajax 요청이나 timeout을 생성할 때,** 
그리고 심지어 console.log()를 선언하는 것도 사이드 이펙트이다.