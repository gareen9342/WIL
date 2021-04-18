# Spring Annotation

사전적 의미로는 주석이라는 의미를 가진다.   
스프링은 어노테이션을 이용하여 빈과 관련된 정보를 설정할 수 있다.    

## Spring Bean 등록 과정   

1. CommonAnnotationBeanPostProcessor 클래스를 설정파일에 bean객체로 등록한다.     
    1. **annotation을 이용하기 위해**
        <context:annotation-config> 태그를 이용한다. 

    2.  **Component Scan이 필요할 때**
        <context:component-scan base-package=“”/>태그를 이용한다.
        -> @Component, @Controller, @Service, @Repository 등의 annotation을 자동처리

    3. <mvc:annotation-driven/>
        -> @RequestMapping, @Valid 등 spring mvc component들을 자동 처리 HandlerMapping, HandlerAdapter를 등록하여 @Controller에 요청 연결 해당 설정이 없어도 component-scan이 있으면 mvc  application 동작

    4.  4개의 sterotype annotation (component-scan에 의해 자동으로 등록)    
        @Component : stereotype annotation 의 조상    
        @Controller : Spring MVC에서 controller 로 인식    
        @Service : 역할 부여 없이 스캔 대상. 비즈니스 클래스에 사용    
        @Repository : 일반적으로 dao에 사용. Exception 을 DataAccessException으로 변환   

## 대표적인 annotation들 정리

1. @Component
패키지 : org.springframework.stereotype
버전 : spring 2.5
클래스에 선언하여 해당 클래스를 자도으로 bean등록 
bean이름은 해당 클래스의 이름 (첫 글자 소문자)
범위는 디폴트로 singleton, @Scope로 지정 가능


2. @Autowired
패키지 : org.springframework.beans.factory.annotation
버전 : spring 2.5
Autowired annotation 은 spring. 에서 의존관계를 자동으로 설정할 때 사용한다. 
이 어노테이션은 ㅐㅇ성자, 필드, 메서드 세 곳에 적용이 가능하며 타입을 이용한 프로퍼티 자동 설정 기능을 제공한다.
즉, 해당 타입의 빈 객체가 없거나 2개 이상일 경우 예외를 발생시킨다. 
프로퍼티 설정 메서드(setter)형식이 아닌 일반 메서드에도 적용이 가능하다. 
**같은 타입의 빈을 여러 개 등록시에 Autowired를 제어하기**
byType으로 의존 관계를 자동으로 설정할 경우 같은 타입의 빈이 2개 이상 존재하게 되면 예외가 발생하는데, @Autowired에서도 같은 문제가 발생한다.  
이 떄, @Qualifier를 사용하면 동일한 타입의 빈 중 특정 빈을 사용하도록 하여문제를 해결할 수 있다.  
ex )
```
@Autowired
@Qualifier(“test”)
private Test test;
```

3. @Qualifier   
패키지 : org.springframework.beans.factory.annotation   
버전 : spring 2.5   
**@Autowired annotation 이 타입 기반이기 떄문에 2개 이상의 동일타입 빈 객체가 존재할 시 특정 빈을 사용하도록 선언한다.**
@Qualifier(“beanName”)의 형태로 @Autowired 와 같이 사용하며   
 메서드에서 두 개 이상의 파라미터를 사용할 경우에는 파라미터 앞에 선언해야 한다.   

4. @Require   
패키지 : org.springframework.beans.factory.annotation   
버전 : spring 2.5   
필수 프로퍼티임을 명시하는 것으로 프로퍼티 설정 메서드 ( setter ) 에 붙이면 된다.  
필수 프로퍼틸ㄹ 설정하지 않을 경우 빈 생성시 예외를 발생시킨다.  

5. @Repository    
패키지 : org.springframework.stereotype    
버전 : spring 2.0     
**dao**에 사용되며 Exception을 DataAccessException 으로 변환한다.    

6. @Service    
버전 : spring 2.0   
@Service 를 적용한 class는 비즈니스 로직(biz)로 간주한다.    