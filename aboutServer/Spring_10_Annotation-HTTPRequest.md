# HTTP Request 관련 어노테이션 정리

출처 : [https://www.baeldung.com/spring-request-param](https://www.baeldung.com/spring-request-param)      
HTTP Header와 Body를 가지고 올 수 있다. 
애너테이션을 이용하면 매핑하여 자바의 객체로 변환해준다.    

## Request Header


```@RequestHeader("header의 값")```    

HTTP request 의 Header를 위의 애노테이션으로 받을 수 있다.    

```java
@RequestMapping("/displayHeaderInfo.do")
public void displayHeaderInfo(@RequestHeader("Accept-Encoding") String encoding )  {
	//============
    System.out.println( encoding );//gzip, deflate, br
}
```


## Request Body
```@RequestBody MemberDto member ``` 

HTTP Request Body 값을 자바 객체로 받을 수 있음

Spring이 자동적으로 Json 을 Java의 값으로 변환시켜줌 
DTO와 연결시킬시 컬럼 이름을 정확하게 맞춰주기. 

## RequestParam
```@RequestParam(required= ~ ,name="param name") ~```  

Request URL의 쿼리 파라미터를 가지고 와준다.   

1. 변수의 이름과 쿼리 파라미터의 이름을 같게 맞춰줄 때     

```java
@GetMapping("/api/foos")
@ResponseBody
public String getFoos(@RequestParam String id) {
    return "ID: " + id;
}
```

2. 변수의 이름과 쿼리 파라미터의 이름이 다를 경우    

```java
@PostMapping("/api/foos")
@ResponseBody
public String addFoo(@RequestParam(name = "id") String fooId, @RequestParam String name) { 
    return "ID: " + fooId + " Name: " + name;
}
```

3. 쿼리 파라미터가 필요할 수도, 안 필요할 수도 있을 때에는 required 옵션을 붙여준다.    

```java
@GetMapping("/api/foos")
@ResponseBody
public String getFoos(@RequestParam(required = false) String id) { 
    return "ID: " + id;
}
```

4. defaultvalue

```java
@GetMapping("/api/foos")
@ResponseBody
public String getFoos(@RequestParam(defaultValue = "test") String id) {
    return "ID: " + id;
}
```

결과물은 이러하다..
a.

http://localhost:8080/api/foos

----

ID: test



b.

http://localhost:8080/api/foos?id=abc

----

ID: abc

