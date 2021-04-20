# AOP (Aspect Oriented Programming)

관점지향 프로그래밍(AOP)은 객체지향 프로그래밍의 뒤를 이은 또 하나의 프로그래밍 언어구조이다. 
관점지향의 중요한 개념은 ‘횡단 관점의 분리(Separation of Cross Cutting Concern)’ 이다.
 
## CC (Core Concern)

주 관심사항

## CCC ( Cross Cutting Concern)

공통 관심사항, Logging, transaction 등

## 결합점 ( JoinPoint )

인스턴스의 생성시점. 메소드를 호출하는 시점, Exception이 발생하는 시점과 같이 애플리케이션이 실행될 때 특정 작업이 실행되는 시점을 의미한다. 

(Aspect를 플러그인 할 수 있는 애플리케이션의 실행시점)

## 교차점( Pointcut )

충고가 어떤 결합점에 적용되어야 하는지 정의, 명시적인 클래스의 이름, 메소드의 이름이나 클래스의 메소드의 이름과 패턴이 일치하는 결합점을 지정 가능토록 해준다. 

## 충고 ( Advice )

교차점에서 지정한 결합점에서 실행(삽입)되어야 하는 코드. Aspect의 실제 구현체. 

## 에스펙트 (Aspect)

에스펙트는 AOP의 중심 단위. Advice와 Pointcut 을 합친 것이다. 구현하고자 하는 횡단 관심사의 기능, 
애플리케이션의 모듈화 하고자 하는 부분

## 엮기 (Weaving)

에스펙트를 대상 객체에 적용하여 새로운 프록시 객체를 생성하는 과정을 말한다.
Aspect는 대상 객체의 지정된 결합점에 엮인다.

## <설정 구조>  
```xml
<aop:config>
<aop:pointcut/> : pointcut 설정
<aop:aspect> : aspect 설정
<aop:before/> : method 실행 전 
<aop:after-returning/> : method 실행 후
<aop:after-throwing/> : method 예외 발생시  
<aop:after/> : method 실행 후 
<aop:around/> : 모든 시점 적용 가능
</aop:aspect>
</aop:config>
```

## 연결하는 applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:aop="http://www.springframework.org/schema/aop"
	xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-4.3.xsd">

	<bean id="woman" class="com.test03.Woman"></bean>
	<bean id="man" class="com.test03.Man"></bean>
	<bean id="myAspect" class="com.test03.MyAspect"></bean>

	<aop:config>
		<aop:aspect ref="myAspect">
			<aop:before method="before"
				pointcut="execution(public * *(..))" />    ->>>>> (joinpoint를  )어떤 시점에서 이게 연결이 될 것인지 어떤 ccc를 연결해줄 것인지 명시해주는 것이다. 
			<aop:after method="after"
				pointcut="execution(public * *(..))" />
		</aop:aspect>
	</aop:config>
</beans>
```
