# Spring REST API server

## REST ?
REST(Represetational State Trandfer) 는 월드와이드웹과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식   
자원에 대한 주소를 지정하는 방법 전반을 일컫는다.
간단한 의미로는 웹 상의 자료를 HTTP위에서 SOAP이나 쿠키를 통한 세션 트랙킹 같은 별도의 전송 계층 없이 전송하기 위한 아주 간단한 인터페이스를 말한다.
REST아키텍처 형식을 따르면 HTTP나 WWW이 아닌 아주 커다란 소프트웨어 시스템을 설계하는 것도 가능하다.

## RESTful 제약조건

REST의 제약 조건들을 제대로 지키면서 REST아키텍처를 만드는 것을 RESTful이라고 한다.

다음 제약조건들을 준수하는 한 개별 컴포넌트를 자유롭게 구현할 수 있다. 

## 클라이언트 서버 구조 (client-server model)

일관적인 인터페이스로 분리되어야 한다. 

### 무상태성 (Stateless)

서버에 클라이언트의 상태 정보를 저장하지 않는다.

### 캐시기능(cacheable)

클라이언트의 응답을 캐시할 수 있어야 하며 캐싱은 클라이언트-서버 간 상호작용을 부분적으로 또는 완전하게 제거하여 scalability와 성능을 향상시킨다.

### 계층화 시스템 (layered system)

중간 서버는 로드 밸런싱 기능이다 공유 캐시 기능을 제공함으로써 화장성 있는 시스템을 구성하는 데 유용하다.

### 코드 온 디맨드 (code on demand)

서버가 자바 애플릿이나 자바스크립트 실행코드의 제공을 통해 클라이언트가 실행시킬 수 있는 로직을 전송하여 기능을 확장시킬 수 있다. 

### 인터페이스 일관성

아키텍처를 단순화시키고 작은 단위로 분리함으로써 클라이언트-서버의 각 파트가 독립적으로 개선될 수 있도록 해준다. 
---

## REST 인터페이스 원칙에 대한 가이드

가이드를 충실히 이행했는지에 따라 REST를 제대로 사용했는지 판단할 수 있다.

### 1. 자원식별

요청 내에 기술된 개별 자원을 식별할 수 있어야 한다. REST시스템에서의 URI사용을 예로 들 수 있다.

### 2. 메시지를 통한 리소스 조작

클라이언트가 어떤 자원을 지칭하는 메시지와 특정 메타데이터만 가지고 있다면 이것으로 서버 상의 해당 자원을 수정, 삭제하는 추ㅇ분한 정보를 갖고 있는 것으로 볼 수 있따. 

### 3. 자기 서술적 메시지

### 4. 애플리케이션 상태에 대한 엔진으로서의 하이퍼미디어 (HATOAS)

---

## REST API 설계

서버 한 대가 여러 클라이언트에 대응하려면 REST API가 필요하다.

### REST API의 구성

- 자원 (resource) : URI
- 행위 (verb) : HTTP메서드
- 표현 ( representations ) : 리소스에 대한 표현 ( HTTP Message Body )



-------

### @RESTController

@RestController 는 @Controller 애너테이션과 @ResponseBody 애너테이션을 합쳐놓은 애너테이션이다.

클래스 상단에 선언하면 메서드마다 @ResponseBody를 붙여 주지 않아도 된다. 

### @ResponseEntity, @ResponseBody

ResponseEntity를 이용하면 단순히 Object리턴값을 넘어서 header와 body를 리턴 시킬 수 있다.   

## 컨트롤러 요청 매핑

### 요청 경로 매핑

@RequestMapping 의 value속성에 요청 경로를 설정한다.   

- 요청 경로는 반드시 설정해야 하는 필수 정보이다.   
- 속성이 하나일 때는 속성명을 생략할 수 있다.   
- 클래스 레벨로 요청 경로를 지정하면 메서드 레벨에서 지정한 경로의 기본 경로로 취급된다.   

### 요청과 매핑

- contoller method    

```java
//value 속성에 요청 경로를 설정한다.
@RequestMapping(value="/boards/register")
public void registerForm(){
	log.info("registerForm")
}
```

- Mapping Controller

```java
@RestController//클래스 레벨 요청 경로 지정
@RequestMapping("/boards")
public class BoardController{
	private static final Loger logger = LoggerFactory.getLogger(BoardController.class)

//하위 요청 경로 지정
	@RequestMapping("/register")
	public void registerForm(){
		log.info("registerForm");
	}
		
}
```

- http 메서드 매핑

```java
-client
.get("/boards")

-server
@RequestMapping(value="", method=RequestMethod.GET)
public ResponseEntity<List<Board>> list(){
	log.info("list")
}
```

- header매핑

```java
=============== client ===============
    - X-HTTP-Method-Override 요청 헤더값을 PUT으로 지정
    -> config에
    headers : {
        "X-HTTP-Method-Overide" : "PUT"
    }
=============== server ===============
    RequestMapping(value = "/{baordNo}", 
		method= RequestMethod.PUT, 
		headers = "X-HTTP-Method-Override = PUT")

```