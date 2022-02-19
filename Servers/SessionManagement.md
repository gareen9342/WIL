## Session Management

세션 관리법 

1. sticky session
2. session clustering
3. Inmemory DB를 사용한 session storage

sticky session : 고정적으로 로드밸런스가 같은 세션은 같은 서버로 갈 수 있게 함
단점: 고정된 세션 사용시 특정 서버에 트래픽 집중될 때 위험하다.

session clustering: 클라이언트의 세션을 모든 서버가 복제해서 들고 있는 것

Inmemory DB : Inmemory DB인 레디스, 멤캐시드 등을 이용한 관리법