# 구조분해 (Descructuring)

출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment   
배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게하는 JavaScript 표현식(ES6)   

## 배열 구조 분해

```javascript
// ES5
const points = [20, 30, 40];
const x = points[0];
const y = points[1];
const z = points[2];
console.log(x, y, z); // 20 30 40 

// ES6
const points = [20, 30, 40];
const [x, y, z] = points;
console.log(x, y, z); // 20 30 40 

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

// y 값 무시하기
const [x, , z] = points
console.log(x, z); // 20 4
```

# 객체 구조 분해

```javascript
// ES5 
const car = {
 type: 'Toyota',
 color: 'Silver',
 model: 2007
};

const type = car.type;
const color = car.color;
const model = car.model;

console.log(type, color, model); // Toyota Silver 2007

// ES6
const {type, color, model} = car;
console.log(type, color, model); // // Toyota Silver 2007

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

## 선언에서 분리한 할당

변수의 선언이 분리되어도 구조 분해를 통해 값을 할당할 수 있다. 

```javascript
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

## 새로운 변수 이름으로 할당하기

객체로부터 속성을 해체하여 객체의 원래 속성명과는 다른 이름의 변수에 할당할 수 있다.

```javascript
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
```

## 기본값을 갖는 새로운 이름의 변수에 할당하기

새로운 변수명 할당과 기본값 할당을 한번에 할 수 있다. 

```javascript
var {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
```

## 함수 매개변수로 전달된 객체에서 필드 해체하기

```javascript
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```