
## spring boot project with Maven
일단 리눅스에 java jdk 랑 mvn을 깔고
_(https://essencedrain.tistory.com/4)_

환경변수가 제대로 세팅되어 있지 않다면 세팅해두어야 한다.   
( `nano /etc/profile`)   
명령어 위치 확인은 which <명령어>


1. 빌드   
`mvn clean install`   


2. 배포

빌드된 파일이 있는 곳에서 

`./mvnw clean package`

(권한은 `chmod +x mvnw` 로 )

ls -al시 target 디렉토리 있고 이동 후에 
`java -jar (jar 파일) & (백그라운드 실행시)`

3. 배포를 하지 않고 실행만 할 경우에 .jar 파일이 있는 경로 에서    
`mvn spring-boot:run`
  

https://parkjangwon.github.io/springboot/java/linux/cloud/2020/10/01/%EC%9B%90%EA%B2%A9-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0(Spring-Boot-CLI).html


