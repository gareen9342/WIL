# Interceptor   
인터셉터는 웹 애플리케이션 내에서 특정한 URI호출을 가로채는 역할을 한다. 

## Filter와 Interceptor

서블릿 기술의 필터와 스프링 MVC의 인터셉터는 특정 URI에 접근할 때 제어하는 용도로 사용된다는 공통점이 있다.   
하지만 실행 시점에 속하는 영역(Context)에 차이점이 있다.   
인터셉터의 경우 스프링에서 관리하기 때문에 스프링 내의 모든 객체에 접근이 가능하지만   
필터는 웹 애플리케이션 영역 내의 자원들은 활용할 수 있지만 스프링 내의 객체에는 접근이 불가능하다.    

## 호출시점

Filter 는DispatcherServlet이 실행되기 전, Interceptor는 DispatcherServlet이 실행된 후

## 설정 위치

Filter 는 web.xml, Interceptor 는 spring-servlet.xml

## 스프링 AOP와 인터셉터

특정 객체 동작의 사전 혹은 사후 처리는 AOP기능을 활용할 수 있지만 컨트롤러의 처리는 인터셉터를 활용하는 경우가 더 많다.    
AOP의 어드바이스와 인터셉터의 가장 큰 차이는 파라미터의 차이라고 할 수 있다.   
어드바이스의 경우 JoinPoint 나 ProceedingJoinPoint등을 활용해서 호출 대상이 되는 **메서드의 파라미터** 등을 처리하는 방식이다.   
인터셉터는 **HttpServletRequest, HttpServletResponse를 파라미터로 받는 구조**이다. 

## HandlerInterceptorAdaptor

HandlerInterceptorAdaptor는 HandlerInterceptor를 쉽게 사용하기 위해서 인터페이스의 메서드를 미리 구현한 클래스이다.   
HandlerInterceptor의 메서드는 다음과 같다.    

- **preHandle**
**지정된 컨트롤러의 동작 이전에 가로채는 역할로 사용한다.**
- **postHandle**
**지정된 컨트롤러의 동작 이후에 처리,  DispatcherServlt이 화면을 처리하기 전에 동작한다.**
- **afterCompletion**
**DispatcherServlet의 화면 처리가 완료된 상태에서 처리한다.**

## 인터셉터 설정

인터셉터 클래스를 정의하고 자바 설정 파일에 인터셉터를 지정한다.   

### 인터셉터 지정 - Web.xml 파일을 이용한 인터셉터 설정

```xml
<interceptors>
		<interceptor>
			<mapping path="/*" /> // 모든 요청을 가로채서 로그인 인터셉터 객체를 실행하겠다. 
			<beans:bean
				class="com.mvc.upgrade.common.interceptor.LoginInterceptor" />
		</interceptor>
	</interceptors>
```

### 인터셉터 지정 - 자바 설정 파일을 사용한 인터셉터 설정

```java
@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
	@Override
	public void addInterceptors(InterceptorRegistry registry){
		->원하는 URI에 적절한 패턴을 적용하여 인터셉터를 지정하낟. 
	  registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/login");
		WebMvcConfigurer.super.addInterceptors(registry);
	}
}
```

### 인터셉터 정의 - 접근 로그 저장 인터셉터

```java
@Log
public class LoginInterceptor extends HandlerInterceptorAdapter {
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		log.info("preHandle");

		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		log.info("postHandle");
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
		log.info("afterCompletion");
	}

}
```

## 구현

Interceptor를 구현하는 방법은 두 가지가 있는데 , HandlerInterceptor 인터페이스를 구현하는 방법과 HanderInterceptorAdaptor 클래스를 상속받는 방법이 있다.   
 preHandle() , postHandle() , afterCompletion()   
위와 같이 구현하도록 되어있다.    
주로 로그인 한 유저와 로그인 하지 않은 유저를 구분하여 처리할 수 있도록 구현되어 있다.