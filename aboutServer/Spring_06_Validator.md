# Validator

참고 : [https://lazymankook.tistory.com/86](https://lazymankook.tistory.com/86), [https://bbiyakbbiyak.tistory.com/3](https://bbiyakbbiyak.tistory.com/3)

## Validation ?

유효성검사란 어떤 데이터가 유효한지, 유효하지 않은 지 판단하는 것을 의미한다. 

UI 단에서 유효성검사를 하는 것은 보안적으로 의미가 없을 수 있다.   

*서버와의 통신을 통해서 올바르지 않은 데이터가 서버로 전송되거나, 통신되지 않도록 하는 것이 중요하다.*    

스프링에서는 Validator 인터페이스를 지원하여 어플리케이션에서 사용하는 객체를 검증할 수 있는 기능을 제공한다.

이 Validator 인터페이스는 어떤 특정 계층에 사용하는 기능이 아닌 모든 계층에서 사용할 수 있다. 

이렇게 두 가지의 메서드를 구현하도록 되어있다. 

**boolean supports(Class clazz)** : 어떤 타입의 객체를 검증할 때 이 객체의 클래스가 이 Validator가 검증할 수 있는 클래스인 지를 판단하는 매서드   

**void validate(Object target, Errors error)** : 실제 검증 로직이 이루어지는 메서드, 구현할 때 ValidationUtils를 사용하여 편리하게 작성 가능    

## supports

예시로는 이런 게 있다.

타겟의 클래스와 검사할 클래스가 맞는 지 검사하는 것이다. 

```xml
<Class이름>.class.equals(<검사할 클래스>)
```

## validate

유효성 검증 로직이 이루어 지는 메서드이다.    
Errors interface가 제공하는 메소드를 이용하여 에러코드를 추가할 수 있다.    
BindingResult 객체는 모델의 검증 작업에서 나타난 에러를 저장하는 역할을 한다.    
validate함수에서 reject함수를 호출하면 파라미터로 에러코드를 지정할 수 있다.    
내가 사용했던 코드는 필드에 대한 에러코드를 추가하는 rejactValue 이다   

```java
rejectValue(String field, String errorCode, String defaultMessage)
```

에러코드는 에러메시지와 관련이 있다.

보통 messages.properties와 같은 properties파일에서 읽어오도록 구현한다. 

Spring에서는 MessageSource를 이용해 properties파일로부터 에러메시지를 가져오도록 할 수 있다.

함수에 사용한 값은 properties파일의 키값이다. 

`name.empty=name is empty`

이런 식으로 선언해줘야 한다. 

이 값을 가지고 오기 위해는 MessageSource를 사용한다. 

### Errors를 등록하는, Errors 인터페이스가 제공하는 메서드

- **reject(String errorCode)**

전 객체에 대한 글로벌 에러 코드를 추가

- **reject(String errorCode, String defaultMessage)**

전 객체에 대한 글로벌 에러코드를 추가하고, 에러코드에 대한 메세지가 존재하지 않을 경우 defaultMessage를 사용

- **reject(String errorCode, Object[] errorArgs, String defaultMessage)**

 전 객체에 대한 글로벌 에러코드를 추가, 메세지 인자로 errorArgs를 전달, 에러코드에 대한 메세지가 존재하지 않을 경우 defaultMessage를 사용

- **rejectValue(String field, String errorCode)**

필드에 대한 에러코드를 추가

- **rejectValue(String field, String errorCode, String defaultMessage)**

필드에 대한 에러코드를 추가 에러코드에 대한 메세지가 존재하지 않을 경우 defaultMessage를 사용

- **rejectValue(String field, String errorCode, Object[] errorArgs, String defaultMessage)**

필드에 대한 에러코드를 추가, 메세지 인자로 errorArgs를 전달, 에러코드에 대한 메세지가 존재하지 않을 경우 defaultMessage사용

### Errors 인터페이스의 에러 발생 여부를 확인하기 위한 메소드

- **boolean hasErrors()**

에러가 존재하는 경우 true 리턴

- **int getErrorCount()**

 에러의 갯수를 리턴

- **boolean hasGlobalErrors()**

reject() 메소드를 이용해서 추가된 글로벌 에러가 존재할 경우 true 리턴

- **int getGlobalErrorCount()**

reject() 메소드를 이용해서 추가된 글로벌 에러 갯수를 리턴

- **boolean hasFieldErrors()**

rejectValue() 메소드를 이용해서 추가된 에러가 존재할 경우 true 리턴

- **int getFieldErrorCount()**

rejectValue() 메소드를 이용해서 추가된 에러 갯수를 리턴

- **boolean hasFieldErrors(String field)**

 rejectValue() 메소드를 이용해서 추가한 특정핑드의 에러가 존재할 경우 true 리턴

- **int getFieldErrorCoutn(String field)**

 rejectValue() 메소드를 이용해서 추가한 특정필드의 에러 갯수 리턴

→ 이렇게  BindingResult에 저장된 에러메시지는 jsp에서는 jsp 의 form tags 라이브러리를 이용하여 사용된다. 

## 구현코드

- Controller

    ```java
    @RequestMapping("/upload")
    	public String fileUpload(HttpServletRequest request, Model model, UploadFile uploadFile, BindingResult result) {

    		///https://seypark.tistory.com/120
    		
    		// * Spring interface 의 유효성검사
    		// * 1. Validator : validator가 해당 클래스에 대한 값 검증을 지원하는 지의 여부를 확인해준다. 
    		// * 검증 결과 문제가 있을 경우 error 객체에 어떤 문제인지에 대한 정보를 저장한다.
    		// 파일 유효성 검사를 진행한다. 파일의 사이즈가 0일 경우 에러를 리턴한다. rejectValue를 만들어준다.
    		
    		fileValidator.validate(uploadFile, result);

    		// Errors ( 최상위 에러 객체 )를 상속받고 있는 Binding Result
    		// validate후에 BindResult를 통해서 에러가 있는지 확인하고 에러가 존재할 경우 알맞은 처리를 수행할 수 있다.
    		// 아까 파일에서 사이즈가 0일경우 upload페이지로 보낸다는 뜻 
    		if (result.hasErrors()) {
    			return "upload";
    		}

    		//======== 사이즈에 관한 유효성검사(fileNPE)를 통화한 상태 =========
    		
    		MultipartFile file = uploadFile.getMpfile();
    		// 파일이름을 가지고 온다. 
    		String name = file.getOriginalFilename();

    		UploadFile fileObj = new UploadFile();
    		fileObj.setName(name);
    		fileObj.setDesc(uploadFile.getDesc());

    		InputStream inputStream = null;
    		OutputStream outputStream = null;

    		try {
    			inputStream = file.getInputStream();
    			// 절대경로와 현재 원하는 경로를 지정해서 파일의 경로를 만들어준다. 
    			String path = WebUtils.getRealPath(request.getSession().getServletContext(), "/resources/storage");
    			System.out.println("업로드 실제 경로 : " + path);
    			
    			
    			// 파일을 만들어 주고 객체 생성 (new File 후에 경로와 파일이름을 지정하면 됨)
    			File storage = new File(path);
    			if (!storage.exists()) {
    				// 없으면 경로를 만들어 준다. 
    				storage.mkdirs();
    			}

    			File newFile = new File(path + "/" + name);
    			if (!newFile.exists()) {
    				// 없으면 새로운 파일을 생성해준다. 
    				newFile.createNewFile();
    			}

    			//fileoutputstream은 무조건 파일을 생성한다. 
    			outputStream = new FileOutputStream(newFile);

    			int read = 0;
    			byte[] b = new byte[(int) file.getSize()]; // 파일의 사이즈 만큼 바이트 배열읆 만들어준다. 

    			while ((read = inputStream.read(b)) != -1) { // 요소가 있으면 outputStream 바이트 단위로 읽어온 저 단위들을 넢어준다. (write) 
    				// 내부에 요소가 있는 지 검사해주는 메서드인 .read 요소가 없을 경우에 -1을 리턴하게 된다. 
    				/**
    				 * https://m.blog.naver.com/PostView.nhn?blogId=rain483&logNo=220625901561&proxyReferer=https:%2F%2Fwww.google.com%2F
    				 * OutputStream os = new FileOutputStream("파일 경로");
    				 * byte[] data = "가나다".getBytes();
    				 * os.write(data, 1,2) // "나다"만 출력합니다.
    				 */
    				  
    				// b[0] ~ read개의 바이트를 출력스트림으로 보낸다. 
    				System.out.println("read = " + read);
    				outputStream.write(b, 0, read);
    			}

    		} catch (IOException e) {
    			e.printStackTrace();
    		} finally {
    			try {
    				inputStream.close();
    				outputStream.close();
    			} catch (IOException e) {
    				e.printStackTrace();
    			}
    		}

    		model.addAttribute("fileObj", fileObj);

    		return "download";

    	}
    ```

- FileValidator

```java
@Service
public class FileValidator implements Validator {

	//validator 사용 가능 여부 확인 
	// 어떤 클래스 타입이 들어왔을 때 사용할지 하지 않을 지 결정 
	@Override
	public boolean supports(Class<?> clazz) {
		return false;
	}

	@Override
	public void validate(Object target, Errors errors) {
		UploadFile file = (UploadFile) target;
		
		
		
		
		// https://bbiyakbbiyak.tistory.com/3
		
		// 그냥 reject일 경우에는 전 객체에 대한 글로벌 에러코드를 추가한다. 
		// 필드를 추가하게 될 경우에는 그 필드에 관한 에러를 가져올 수 있다. 
		
		// 해당 errorCode가 없으면 default message 전달 
		// errorCode같은 경우는 xml에 설정해 줄 수 있다. 
		
		// rejectValue ? 
		// 현재 객체의 지정된 필드 오류를 등록해준다. 
		// 필드 이름은 null과 빈 문자열도 가능하다. 
		

		// 1. field 2. errorcode 3. default message
		
		if(file.getMpfile().getSize() == 0) {
			errors.rejectValue("mpfile","fileNPE", "please select a file");
		}
	}

}
```

- upload.jsp

    ```html
    <form:form method="post" enctype="multipart/form-data" modelAttribute="uploadFile" action="upload">
    		<h3>uploadForm</h3>
    		file<br/>
    		<input type="file" name="mpfile" /><br/>
    		<p style="color:red; font-weight: bold;">
    			<form:errors path="mpfile"></form:errors>
    		</p><br/>
    		<textarea rows="10" cols="40" name="desc">asdf</textarea><br/>
    		<input type="submit" value="send" />
    	</form:form>
    ```