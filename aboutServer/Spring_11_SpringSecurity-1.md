# Spring Security - 설정관련 정리

## Security Config 내부 쓰인 함수들 정리해놓기
WebSecurityConfigurerAdapter를 상속받게 되면 인증 인가 cors 에러 등등 여러 함수들을 사용할 수 있다. 

### httpSecurity

```java
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        http.formLogin() // 폼 기반 인증 로그인
        httpBasic() // 일반적인 아이디, 패스워드 기반 인증 로그인
        cors() // cors를 적용. 인증 성공 여부와 관하게 Origin 헤더가 있는 모든 요청에 대해 CORS헤를 포함한 응답을 해준다. 
        //cors 정책 설정을 corsCongifuratioinSource를 상속받아 설정하도록 한다. 

        http.csrf() // http세션과 동일한 생명주기를 가지는 토큰을 발행한 후 http요청마다 발행된 토큰이 요청에 포함되어 있는지 검사하는 가장 일반적으로 알려진 방식의 구현이 설정되어있는데 이것을 쓸 것인지 안 쓸 것인지 

        http.addFilterAt//필터 넣는 위치, 여부 종류 설정 가능 
        addFilter
        addFilterBefore
        sessionManagement // 세션 정책을 설정함
        sessionCreationPolicy

        http.authorizeRequests() // 이걸 붙여서 여러 자섹에 대한 접근 처리를 
        requestMatchers // 다양한 httpSecurity를 설정하고자 할 때 
        antMatchers
        anyRequest.authenticated()

        //인가에 문제가 있는 요청에 대해 접근 거부 처리자로 지정
        // 
        http.exceptionHandling()
        .authenticationEntryPoint() // response에 설정해줄 객체를 인자로 넣어주어야 한다. 
        .accessDeniedHandler(accessDeniedHandler()); // 
    }
```

#### requestMatcher을 왜 쓰는 지 궁금해서 찾아본 것   

https://stackoverflow.com/questions/53646660/using-httpsecurity-requestmatchers-in-class-resourceserverconfiguration-configur

다양한 httpSecurity를 설정하고자 할 때 HttpSecurity.requestMatcher() 나 이 중 하나를 써야한다.   
- HttpSecurity.requestMatcher(RequestMatcher)   
- HttpSecurity.antMatcher(String)    
- HttpSecurity.mvcMatcher(String)    
- HttpSecurity.regexMatcher(String)    

#### sessionManagement 관련... 
https://ssndwind.tistory.com/71    

### AuthenticationManagerBuilder 로 유저 정보 확인
inMemoryAuthentication으로 활성화 및 설정이 가능하고 선택적으로 인메모리 사용자 저장소에 값을 채울 수도 있고.   
데이터 베이스를 이용하여 사용자 정보를 가져와 인증할 수도 있고..   

```java
@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(customUserDetailsService()) //사용자 계정에 데이터를 로딩시켜주기 위해 사용한다. 
		.passwordEncoder(passwordEncoder());
	}
```

**설정관련 궁금해서 추가로 찾아 본 링크**    
하단의 것이 자세히 나와있다.     
- https://postitforhooney.tistory.com/entry/SpringSecurity-%EC%B4%88%EB%B3%B4%EC%9E%90%EA%B0%80-%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94-Spring-Security-%ED%8D%BC%EC%98%B4