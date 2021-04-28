# Spring REST API server - 컨트롤러 응답

## void 타입

내용이 없는 응답 본문을 반환하는 용도로 사용한다. 

## String

문자열 반환

## 자바빈즈 클래스 타입

JSON 객체 타입의 데이터를 만들어서 반환하는 용도로 사용한다.
반환값이 객체 타입이면 JSON 타입으로 자동으로 변환한다. 

## 컬렉션 List 타입

JSON객체 배열 타입의 데이터를 만들어서 반환하는 용도로 사용한다. 

## 컬렉션 Map 타입

Map 형태의 컬렉션 자료를 JSON 객체 타입의 데이터로 만들어서 반환하는 용도로 사용한다. 

## ResponseEntity<String>

response할 때 http헤더 정보와 문자열 데이터를 전달하는 용도간다.

### SUCCESS 메시지와 200OK상태코드를 전송한다.

```java
@RequestMapping(value="/register08", method=RequesMethod.GET)
public ReposeEntity<String>("HELLO", HttpStatus.OK);
```

## ResponseEntity<자바 빈즈 클래스> 타입

response할 때  Http 헤더 정보와 객체 데이터를 전달하는 용도로 사용한다. 

```java
@RequestMapping(value="/register08", method=RequesMethod.GET)
public ResposeEntity<Member> register08(){
	Member member = new Member();
	return new ResponseEntity<Member>(member, HttpStatus.OK);
}
```

## ResponseEntity<List>

response 할 때 Http 헤더 정보와 **객체 배열** 데이터를 전달하는 용도로 사용된다.

## ResponseEntity<Map>

response 할 때 http헤더 정보와 객체 데이터를 Map 형태로 전달하는 용도로 사용한다.