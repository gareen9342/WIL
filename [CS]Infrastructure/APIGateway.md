# API Gateway

출처 : https://wonit.tistory.com/489

MSA 구축시 반드시 알아야할 개념 중 하나

>RESTful 하게 작성된 모든 서비스의 API를 손쉽게 관리하게 해줄 수 있는 것 
모든 클라이언트의 요청이 하나의 서버로 들어와 해당 서버에서 요청이 정제되거나 조작되어 각자 목적에 맞는 서비스를 찾아가도록 도와주는 방식

## API Gateway의 역할
1. 프록시의 역할, 로드 밸런싱 
2. 인증 서버로서의 기능 : 모든 사용자의 요청에 대해 공통된 인증을 관리해줌 
3. 로깅 서버로서의 기능 : 모든 사용자 요청에 대해 공통 로깅을 처리해줌 

리버스 프록시와 닮아있고 그 역할을 수행함. -> 로드밸런싱과 라우팅을 가능하게 하는 것 

담당하는 서비스가 많아질 수로 병목 현상이 발생할 수 있기 떄문에 적절한 Scale-out을 수행해야한다. 

## 이런 Gateway 기술을 도와주는 것 

- Nginx   
- Kong    
- Apigee  
- Spring Cloud Gateway   
- Spring Cloud Zuul   
- AWS API Gateway    




## 백엔드 API 서버로의 로드 밸런싱

뒷단에 다수의 API 서버가 있을 경우 여러개의 API 서버로의 부하를 분산하는 기능을 둘 수 있다.
또한 하드웨어에 따라 부하 가중치를 줘서 분산하는 기능도 있따.

-> 뒷단의 서버가 살아있으면 부하를 보내고 죽었으면 부하를 안 보내는 기능
+ API서버가 Hang up 상태일 경우 이를 인지해서 부하를 안보내는 등
--> 이를 판단하는 기준은 IP포트가 살아 있음응ㄹ 가지고 판단 하는 것이 아니라 쓰레드 수, 응답 시간등으로 서버의 장애 상태를 판단해야함. 

## 서비스 및 클라이언트  별 엔드포인트를 달리 제공

같은 API를 여러 개의 엔드포인트를 통해서 서비스를 제공할 수 있다는 점

## 메세지 기반 라우팅

메세지의 내용을 기반으로 라우팅을 할 수 있다.. 

HTTP  헤더에 있는 특정 값에 따라 다른 API를 호출하거나 할 수있ㄷ는 것

예를 들면, 글로벌 서비스와 같은 경우는 미국에 있는 API 게이트 웨이로 호출하게 될 경우 미국 API 서버와 유럽 API서버를 동시에 호출해서,

해당 트렌젝션을 모든 데이터 센터에 복제함으로써 API를 통한 데이터 복제가 가능해진다. 

_기타 너무 많은 내용이 있어서...ㅠㅠㅠ_

링크 참고   
https://bcho.tistory.com/1005


