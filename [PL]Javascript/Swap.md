# Swap

> 자바스크립트에서의 swap

출처 : https://velog.io/@jinyongp/%EB%91%90-%EA%B0%92%EC%9D%84-Swap-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95

## 일반적인 방법 - temp 변수 이용
```javascript
let a = 'a',
b = 'b',
temp ;

temp = a;
a = b;
b = temp;
console.log(`a = ${a}, b= ${b}`)
```

## XOR
XOP swap algorithm    
https://en.wikipedia.org/wiki/XOR_swap_algorithm    
숫자로 된 문자열이나 실수는 정수로 변환된다.


```javascript
let
  a = 10, 
  b = 100; 

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`a = ${a}, b= ${b}`);
```

## 덧셈 / 뺄셈 연산자를 이용
변수의 값이 정수라는 보장이 있어야 한다. 
```javascript
let a = 10, b = 100

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a}, b= ${b}`);
```

## 배열을 이용
배열을 생성할 때 a의 값이 복사가 되고 두 번째에 할당시 a = b연산이 실행된다.    
배열의 0번째 값인 a 를 b에 할당하게 된다.
```javascript
let a = 10, b = 100
b = [a, a = b][0]
console.log(`a = ${a}, b= ${b}`);
```

## 구조 분해 할당을 이용

```javascript
let a = 10, b = 100
[a, b] = [b, a]
console.log(`a = ${a}, b= ${b}`);
```
