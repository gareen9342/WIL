# [Spring] DI(Dependency Injection) 과 IoC(Inversion of Control)

## Framework?

프로그램의 골격이 되는 기본 코드  
개발자는 프레임워크를 기반으로 소스코드를 작성하여 소프트웨어를 완성시키면 된다.

## Library

Library?특정 목적을 위해 사용하는 함수들을 모듈화 시킨 것.
(*.jar)

**EJB(Enterprise JavaBean) 기반 개발 에서
POJO(Plain Old Java Object) 기반 개발 으로**

**Spring framework는 엔터프라이즈 애플리케이션 개발을
복잡한 EJB가 아닌 POJO를 통해서 개발 할 수 있도록 돕는다.**

## DI(Dependency Injection)

**객체간의 결합을 느슨하게 하는 스프링의 핵심 기술, 주입기능** 
**약결합?**
**인터페이스를** 사용하여 객체 간 결합도를 낮추는 것

- HelloApp 은 MessageBean 이라는 인터페이스를 통해 객체를 사용.
- 일반적으로 팩토리 메서드를 활용하여, 사용할 객체(MessageBeanKo or MessageBeanEn) 를 생성한다. MessageBean 이라는 이름의 MessageBeanKo의 객체가 생성되든 MessageBeanEn의 객체가 생성되든 HelloApp은 수정될 사항이 없다.

### 의존 객체를 주입하는 다양한 방법

1. 생성자를 이용한 의존 객체 주입

    ```java
    // name value 값으로 나누어서 만들어 주는 방식
    <bean id="studentDao" class="class위치">
    	<constructor-arg name="name" value="이순신"></constructor-arg>
    	<constructor-arg name="salary" value="1234"></constructor-arg>
    </bean>

    // 인자의 index 를 이용해서 만들어 주는 방식
    <bean id="studentDao" class="class위치">
    	<constructor-arg index="0" value="홍길동"></constructor-arg>
    	<constructor-arg index="1" value="1234"></constructor-arg>
    </bean>
    ```

2. setter를 이용한 의존 객체 주입

    ```java
    <bean id="studentDao" class="class위치">
    	<property name="dept" value="기술" /> //setter가 있을 경우에는 property를 이용해서 객체를 생성해준다 
    </bean>
    ```

### 만들어진 객체를 가지고 오는 방법

```java
public static void main(String[] args) {
	ApplicationContext factory = new ClassPathXmlApplicationContext("com/test03/applicationContext.xml");		
	Student lee = (Emp) factory.getBean("lee");
	Student hong = factory.getBean("hong", Emp.class);
	System.out.println(lee);
}
```

## IoC(Inversion of Control) : 제어의 역전

프로그램의 제어 흐름 구조가 뒤바뀌는 것

객체가 사용할 객체를 직접 선언하여 사용하는 것이 아니라, 컨테이너로 부터 주입받아 사용하는 것 

스프링에서 객체를 생성하고 조립하는 컨테이너로, 컨테이너를 통해 생성된 객체를 빈이라고 부른다. 

### Spring IoC Container

IOC기능을 제공하는 컨테이너. 

Bean들을 담고있다. Bean을 구성한다.

### BeanFactory

Bean의 생성과 설정, 관리를 맡고있음

### ApplicationContext

BeanFactory를 상속받고 있기 때문에, BeanFactory와 같은 일을 한다고 볼 수 있다.