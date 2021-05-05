# Configuration

Spring 에서는 서버가 시작될 때  web.xml에 설정해 놓은 설정 정보들을 먼저 읽어서
서버 실행시에 컨테이너를 생성하며 빈도 등록하고, 전체적인 세팅을 진행하게 된다. 

원래 Spring MVC에서는 xml을 활용하여 Bean을 등록하지만, 프로젝트의 규모가 커짐에 따라 사용하는 요소들을 전부 등록하는 것이 어려워지게 되었다. 따라서 @Component, @Repository, @Service, @Controller와 같은 어노테이션이 생겨났고, 발전하다 결국 설정파일도 자바 객체로 관리하여 주입하게 된다. 

## Web.xml → WebApplicationInitializer

WebApplicationInitializer을 implements 받는다. → web.xml을 변경하려고..

이건 서블릿을 초기화 해주는 API이다. 

onStartUp메소드는 서블릿 컨텍스트 초기화 시점에 실행된다.

setLoadOnStartup : 0 이상의 정수가 세팅이 되어 있으면, 톰캣 컨테이너가 실행되면서 서블릿이 초기화된다.  0 에 가까울 수록 먼저 초기화가 진행된다. 음수이면 요청이 들어왔을 때 객체를 메모리에 생성한다.

정수의 값이 0보다 높을 경우 값이 높을 수록 나중에 메모리에 생성됨

```java
@Configuration
public class WebConfig implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		// Application Config
		//applicationContext에 빈 설정 파일들을 register를 통해 붙여준다 

		AnnotationConfigWebApplicationContext applicationContext = new AnnotationConfigWebApplicationContext();
		applicationContext.register(ApplicationConfig.class);

		// 스프링에서 제공하는 서블릿 리스너를 등록해준다. 	기존에 있던 web.xml의 리스너
		// ServletContext의 라이프사이클에 맞추어 ApplicationContext를 ServletContext에 추가/삭제 하도록 해준다. 
		// Listener
	   servletContext.addListener(new ContextLoaderListener(applicationContext));
	   
	   //ServletConfig
	   AnnotationConfigWebApplicationContext servletConfig = new AnnotationConfigWebApplicationContext();
	   servletConfig.register(ServletConfig.class);

	   //Dynamic : 리플렉션 이라는 개념...몰까 
	   ServletRegistration.Dynamic dispatcherServlet = servletContext.addServlet("dispatcherServlet", new DispatcherServlet(servletConfig));
	   
	   dispatcherServlet.setLoadOnStartup(1);
	   dispatcherServlet.addMapping("*.do");
	   
	   //encodingFilter
	   FilterRegistration.Dynamic filterRegistration = servletContext.addFilter("encodingFilter", new CharacterEncodingFilter("UTF-8", true));
	   filterRegistration.addMappingForUrlPatterns(null, true, "/*");
	}
}
```

## servlet-context.xml → WebMvcConfigurer

```java
@Configuration
@EnableWebMvc
@ComponentScan("com.mvc.update")
public class ServletConfig implements WebMvcConfigurer{

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}
	
	@Bean
	public InternalResourceViewResolver getResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		
		resolver.setPrefix("/WEB-INF/views/");
		resolver.setSuffix(".jsp");
		
		return resolver;
		
	}
}
```

### @EnableWebMvc

SpringMvc를 구성할 때 필요한 Bean설정들을 자동으로 해주는 어노테이션 .

***<mvc:annotation-driven/>** 과 같은 일을 해낼 수 있다.* 

@EnableWebMvc는 DispatcherServlet의 기본 전략을 사용하는 것이 아니라 확장성을 더 좋게 하는 DelegatingWebMvcConfiguration을 import한다.

***이 때, 커스텀 하기 위해서는 우리는 인터페이스를 확장해야 하는데, 이 때 필요한 인터페이스가 WebMvcConfigurer이다.***

WebMvcConfigurer를 사용하면  ViewResolver도 쉽게 커스텀 할 수 있다. 

내부적으로 이 어노테이션을 사용하므로서 여러가지 기능을 사용할 수 있도록 구현되어있ㄷㅏ.

### WebMvcConfigurer

@EnableMvcMvc 어노테이션에서 제공하는 Bean을 커스터 마이징(설정) 할 수 있는 기능을 제공한다.

이때 확장을 필요로 하는 메소드만을 구현하여 확장해주면 된다. 

인터페이스를 사용했지만  abtract 클래스처럼 사용할 수 있다. 

addFormatters

addInterceptors

addResourceHandlers

addReturnValueHandlers

addViewController

TaskExecutor

CORS...

### InternalResourceViewResolver

Controller의 실행 결과를 어떤 뷰를 보여줄지의 여부를 결정하는 기능을 제공

- InternalResourceViewResolver - JSP를 사용하여 뷰를 생성한다.
- VelocityViewResolver - Velocity 템플릿 엔진을 사용하여 뷰를 생성한다.

InternalResourceViewResolver 는 다음과 같이 두 개의 프로퍼티를 입력받는다. 

- prefix : 리턴할 뷰 이름 앞에 붙을 접두어
- suffix : 리턴할 뷰 이름 뒤에 붙을 접두어

### @ComponentScan

Controller, Service, Repository, Component애너테이션이 붙은 클래스를 찾아 스프링 컨테이너가 관리.

## applicationContext.xml→ApplicationConfig

datasource와 같은 것들을 이런 식으로 설정할 수 있다. 

기존에 만들었던 빈을 여기서 설정하되 환경변수와 같은 중요한 것들은 XML파일이 아닌 텍스트 파일로 넣어준 후에 @Value어노테이션을 이용해 넣는다.

```java

@Configuration //설정파일임을 알려줌...springbeanconfigurationFile이기떄문 
@PropertySource (value = "classpath:sqls/db.properties" ) // 다수의 것을 가지고 올때는 Sources라고 할 수 있다. 
public class ApplicationConfig {
	
	@Value("${oracle.driver}")
	private String driver;
	
	@Value("${oracle.url}")
	private String url;
	
	@Value("${oracle.username}") 
	private String username;
	
	@Value("${oracle.password}")
	private String password;
	
	// javax의 데이터소스를 가지고오세요 
	@Bean
	public DataSource dataSource() {
		/*
		 * 이 클래스를 만들어 주는 거임 (데이터소스빈)
		 * */
		
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		
		dataSource.setDriverClassName(driver);
		dataSource.setUrl(url);
		dataSource.setUsername(username);
		dataSource.setPassword(password);
		
		return dataSource;
	}
	
	@Bean
	public JdbcTemplate jdbcTemplate() {
		JdbcTemplate jdbcTemplate  = new JdbcTemplate();
		jdbcTemplate.setDataSource(dataSource());
		
		return jdbcTemplate;
	}
}
```