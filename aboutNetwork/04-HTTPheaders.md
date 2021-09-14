# HTTP headers

## HTTP공통헤더 - general

- Date : HTTP메시지가 만들어진 시각, 자동으로 만들어진다.
- Connection
- Cache-Control :
- Content-Length : body 의 길이를 바이트 단위로
- Content-Type : 컨텐츠의 타입과 문자열 인코딩 타입 : 내용이 Text/html
- Content-Language : 사용자 언어 -> 페이지의 언어에 기반한다.
- Content-Encoding : 컨텐츠 압축 방식- 알고리즘이 명시 되어 있음

## HTTP 요청 헤더 - general
Host : 도메인 네임(포트포함)
User-Agent : 클라이언트의 운영체제, 브라우저와 같은 정보.
어떤 클라이언트에서부터 요청이 왔는지 알 수 있는 헤더
Accept : 요청을 보낼 때 서버에 어떤 타입의 데이터가 왔으면 좋겠다고 명시
Authorization : 인증 토큰을 서버로 보낼 떄 사용하는 헤더
Origin : 자원의 시작 주소
Referer : 이 페이지 이전의 페이지 주소

## Authorization 의 종류
Bearer : credential에 OAuth 2.0으로부터 획득한 access token을 넣는 타입
jwt : jwt라는 타입은 존재하지 않는다.

## HTTP 응답 헤더
Access-Control-Allow-Origin : 프로토콜, 서브도메인, 도메인, 포트를 모두 검사해서 요청이 정상적인 곳에서 왔는지 검사를 할 수 있다.
Allow : Access-Control-Allow-Methods랑 비슷하지만, CORS요청 외에도 적용된다.
Contnet-Disposition : 응답 본문을 브라우저가 어떻게 표시해야 할지 알려주는 헤더
Location : 300번대 응답이나 201응답일 떄 어느 페이지로 이동할지를 아려주는 헤더
Content-Security-Policy : 다른 외부 파일을 불러오는 경우에 허용된 외부 소스만 응답할 수 있도록 지정할 수 이싿.

## 쿠키 & 캐시 전용 헤더
### 캐시 헤더
브라우저에 응답으로온 데이터들은 GET요청에 있어서 브라우저에 저장해두고 같은 요청에 대해 두고두고 사용
200, 301, 404 를 캐싱할 수 있다.
Cache-Control : no-cache, no-store, must-revalidate 세 가지가 있음
no-store : 아무것도 캐싱하지 않음
no-cache : 모든 캐시쓰기 전에 진짜 써도 되냐고 물어보는 것
must-revalidate : 만료된 캐시만 서버에 확인을 받도록 하는 것
public : 공유캐시에 저장해도 된다는 뜻
private : 브라우저같은 특정 사용자 환경에만 저장하라는 뜻
+ max-age : 캐시 유효시간을 줄 수 있다
  Age : 캐시 응답 때 나타나는 데, max-age 시간 내에서 얼마나 흘렀는지 초 단위로 알려줌
  Expires : 응답 컨텐츠가 언제 만료되는지, Cache-Control의 max-age가 있는 경우 무시됨
  ETag : 컨텐츠가 바뀌었는지 검사(캐시이용시 사용됨)
  If-None-Match : ETag가 달라졌는 지 검사해서 다를 경우에만 컨텐츠를 새로 내려주라는 뜻

### 쿠키 헤더
**Set-Cookie**
>서버가 클라이언트한테 이런저런 쿠키를 저장하라고 하는 것

Expires : 쿠키 만료 날짜
Max-Age : 쿠키 수명을 알려줄 수 있음
Secure : https 만 허용
HttpOnly : 자바스크립트에서 쿠키에 접근할 수 없도록 XSS 요청을 막을 수 있또록 해준다.
Domain : 도메인을 적어주면 도메인이 일치하는 요청에서만 쿠키가 전송된다.

**Cookie**
> 클라이언트가 서버에게 쿠키를 보내줄 때에 이용하는 헤더
서버는 이 쿠키 헤더를 파싱해서 사용하게 됨
CSRF 공격을 막기 위해서 사용된다.

## X-Header

X-Forwarded-For, X-Forwarded-Host, X-Forwarded-Proto
요청이 어디서부터 건너왔는지 알려주는 헤더


