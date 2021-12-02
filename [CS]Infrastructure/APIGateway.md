# API Gateway

출처 : https://wonit.tistory.com/489

MSA 구축시 반드시 알아야할 개념 중 하나

>RESTful 하게 작성된 모든 서비스의 API를 손쉽게 관리하게 해줄 수 있는 것 
모든 클라이언트의 요청이 하나의 서버로 들어와 해당 서버에서 요청이 정제되거나 조작되어 각자 목적에 맞는 서비스를 찾아가도록 도와주는 방식

## API Gateway의 역할
1. 프록시의 역할, 로드 밸런싱 
2. 인증 서버로서의 기능 : 모든 사용자의 요청에 대해 인증을 관리해줌 
3. 로깅 서버로서의 기능 : 모든 사용자 요청에 대해 로깅을 처리해줌 

리버스 프록시와 닮아있고 그 역할을 수행함. -> 로드밸런싱과 라우팅을 가능하게 하는 것 

담당하는 서비스가 많아질 수로 병목 현상이 발생할 수 있기 떄문에 적절한 Scale-out을 수행해야한다. 

## 이런 Gateway 기술을 도와주는 것 

- Nginx   
- Kong    
- Apigee  
- Spring Cloud Gateway   
- Spring Cloud Zuul   
- AWS API Gateway    


https://bcho.tistory.com/1005