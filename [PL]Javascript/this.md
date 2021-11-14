# 'this'

출처 

[https://www.zerocho.com/category/JavaScript/post/5b0645cc7e3e36001bf676eb](https://www.zerocho.com/category/JavaScript/post/5b0645cc7e3e36001bf676eb)

[https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/JavaScript#this-에-대해서](https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/JavaScript#this-%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C)

**this 는 현재 실행 문맥이다.**

_실행문맥 이라는 말은 호출하는 쪽이 누구냐는 것과 같다._ 
자바스크립트에서 모든 함수는 실행될 때마다 함수 내부에 this 라는 객체가 추가된다.
arguments 라는 유사 배열 객체와 함께 함수 내부로 암묵적으로 전달되는 것이다. 
그렇기 때문에 자바스크립트에서의 this는 함수가 호출된 상황에 따라 그 모습을 달리한다. 

## 1. 객체의 메서드 및 함수

```java
alert(this === window) // true, 호출자는 window

const caller = {
  f: function() {
    alert(this === window)
  },
}
caller.f() // false, 호출자는 caller 객체
```

첫 번째는 함수 호출 (alert) 두 번째는 메서드 호출이라고 말하는데 이런 구분이 괜한 혼란을 야기한다. 
첫 번째 alert도 따지고 보면 window.alert()와 동일하기 때문에 window 객체의 메소드 호출이라고 봐도 무방하다. 
하지만 **strict mode에서는 전역 객체냐, 일반 객체냐, 에 따라 함수 내부의 this의 결과가 다르다는 차이가 있다.**
그러나 이 문제 또한 window를 함수 호출 앞에 붙여 주면 해결된다. 

```java
function nonStrictMode() {
  return this
}

function strictMode() {
  'use strict'
  return this
}

console.log(nonStrictMode()) // window
console.log(strictMode()) // undefined
console.log(window.strictMode()) // window
```

### 1 - 1 . 객체의 메서드를 호출할 때

객체의 프로퍼티가 함수일 경우 메서드라고 부른다.
this 는 함수를 실행할 때 함수를 소유한 객체(메소드를 포함하고 있는 인스턴스)를 참조한다. 
즉 해당 메서드를 호출한 객체로 바인딩된다. **A.B**일때 B함수 내부에서의 this 는 A를 가리키는 것이다. 

```java
var myObject = {
  name: "foo",
  sayName: function() {
    console.log(this);
  }
};
myObject.sayName();
// console> Object {name: "foo", sayName: sayName()}
```

### 1 - 2 . **함수를 호출할 때 (window 객체의 메서드 호출)**

특정 객체의 메서드가 아니라 함수를 호출하면, 해당 함수 내부 코드에서 사용된 this 는 전역객체에 바인딩된다. A.B일때 A가 전역 객체가 되므로 B 함수 내부에서의 this 는 전역 객체에 바인딩 되는 것이다. 

```java
var value = 100;
var myObj = {
  value: 1,
  func1: function() {
    console.log(`func1's this.value: ${this.value}`);

    var func2 = function() {
      console.log(`func2's this.value ${this.value}`);
    };
    func2();
  }
};

myObj.func1();
// console> func1's this.value: 1
// console> func2's this.value: 100
```

→ `func1`에서의 `this`는 **1. 객체를 호출할 때**와 같다

그렇기 때문에 `myObj`가 `this`로 바인딩되고 `myObj`의 `value`인 1 이 console 에 찍히게 된다. 

하지만 `func2`는 **2. 함수를 호출할 때**로 해석해야 한다. 

`A.B`구조에서 `A`가 없기 때문에 함수 내부에서 `this`가 전역 객체를 참조하게 되고 `value`는 100 이 되는 것이다.

## 2. 생성자 함수를 통해 객체를 생성할 때

**new 키워드를 통해서 호출된 함수 내부에서의 this 는 객체 자신이 된다.** 

생성자 함수를 호출할 때의 this 바인딩은 생성자 함수가 동작하는 방식을 통해 이해할 수 있다. 

new 로 함수를 생성자 호출을 하게 되면, 빈 객체에 this 가 바인딩 된다.

이 객체는 함수를 통해 생성된 객체이고, **자신의 부모인 프로토타입 객체와 연결되어 있다.**

**return 문이 명시 되어 있지 않은 경우에는 this 로 바인딩 된 새로 생성한 객체가 리턴된다.** 

```java
var Person = function(name) {
  console.log(this);
  this.name = name;
};

var foo = new Person("foo"); // Person
console.log(foo.name); // 
```

new 키워드가 없으면 일반적인 함수 실행과 동일하게 동작한다.

그래서 this는 window 객체를 가리키게 된다.

```java
const person = {
  name: 'john',
  age: 15000,
  nickname: 'man from earth',
  getName: function() {
    return this.name
  },
}
console.log(person.getName()) // john

const otherPerson = person
otherPerson.name = 'chris'
console.log(person.getName()) // chris
console.log(otherPerson.getName()) // chris
```

 otherPerson 은 person 의 레퍼런스 변수이므로 하나(otherPerson)를 변경하면 다른 하나(person)도 변경된다.

 이를 피하기 위해서는 Object.assign()메서드(ES6 지원)를 이용하여 별도의 객체로 만들어야 한다. 

## **apply, call, bind**

this 를 자바스크립트 코드로 주입 또는 설정할 수 있는 방법.

func2를 호출할 때, func2에서의 this 를 주입하기 위해서 위 세 가지 메소드를 활용할 수 있다. 

1. bind

    ```jsx
    var value = 100;
    var myObj = {
      value: 1,
      func1: function() {
        console.log(`func1's this.value: ${this.value}`);

        var func2 = function(val1, val2) {
          console.log(`func2's this.value ${this.value} and ${val1} and ${val2}`);
        }.bind(this, `param1`, `param2`);
        func2();
      }
    };

    myObj.func1();
    // console> func1's this.value: 1
    // console> func2's this.value: 1 and param1 and param2
    ```

2. call

    ```jsx
    var value = 100;
    var myObj = {
      value: 1,
      func1: function() {
        console.log(`func1's this.value: ${this.value}`);

        var func2 = function(val1, val2) {
          console.log(`func2's this.value ${this.value} and ${val1} and ${val2}`);
        };
        func2.call(this, `param1`, `param2`);
      }
    };

    myObj.func1();
    // console> func1's this.value: 1
    // console> func2's this.value: 1 and param1 and param2
    ```

3. apply

    ```jsx
    var value = 100;
    var myObj = {
      value: 1,
      func1: function() {
        console.log(`func1's this.value: ${this.value}`);

        var func2 = function(val1, val2) {
          console.log(`func2's this.value ${this.value} and ${val1} and ${val2}`);
        };
        func2.apply(this, [`param1`, `param2`]);
      }
    };

    myObj.func1();
    // console> func1's this.value: 1
    // console> func2's this.value: 1 and param1 and param2
    ```

- bind vs apply, call
bind 에서 함수 선언시 this 를 지정한다. 
call과 apply는 함수를 호출할 때, this 와 파라미터를 지정해준다.

- apply vs bind, call 
apply 메서드에는 첫 번째 인자로 this 를 넘겨주고 두 번째 인자로 넘겨줘야 하는 파라미터를 배열의 형태로 전달한다. 
bind 메소드와 call 메서드에는 각각의 파라미터를 하나씩 넘겨주는 형태이다.