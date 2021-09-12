# 객체 동결

>객체는 변경 가능한 값이므로 직접 변경이 가능함.    
개발 전역적으로 쓰이는 상수와 같은 것들은 한번 동결해 주는 것이 바람직하다.


## Object.preventExtensions - 객체 확장 금지

Object.preventExtensions는 객체의 확장을 금지한다.

**객체 확장 금지란 프로퍼티 추가 금지를 의미.**

확장가능한 객체인지 여부는 Object.isExtensible 메서드로 확인할 수 있다.

## Object.seal - 객체 밀봉

Object.seal메서드는 객체를 밀봉함. 읽고 쓰기만 가능하다.

프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지.

밀봉된 객체인지에 대한 여부는 Object.isSealed로 화인.

## Object.freeze - 객체 동결

프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지. 프로퍼티 값 갱신 금지.

동결된 객체는 읽기만 가능.

객체를 동결시켜도 중첩 객체까지 동결할 수는 없다.

이럴 경우 Object.deepFreeze를 이용함.