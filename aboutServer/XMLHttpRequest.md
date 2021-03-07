# XMLHttpRequest에 대해서 알아보자.

XMLHttpRequest란, 서버와 상호작용 하기 위해 사용되는 객체 형태이다.   
페이지는 그대로 두고 데이터 비동기 통신이 가능하다. 
일반적으로는 Ajax 를 이용해 개발을 할 때 주로 이용된다.   
이름에 XML이 적혀있지만 사실 모든 종류의 데이터 형태를 모두 사용할 수 있다.   
readyState  ( XMLHttpRequest 객체의 상태값, client 의 상태)의 변경을 감지할 수 있다.   
또한 서버의 상태또한 status 라는 attribute를 통해서 가지고 올 수 있다 .   

## 속성값

- **XMLHttpRequest.onreadystatechange
readystate 가 변경될 때 마다 호출되는 eventHandler**
- **XMLHttpRequest.readyState**
요청의 상태를 리턴   
- XMLHttpRequest.response   
response body   
- XMLHttpRequest.responseText   
응답  String 요청 실패 혹은 전송 되지 않았을 경우엔 null   
- .responseType   
- responseURL   
- **status** : 요청의 응답 상태   

## readyState의 종류

- 0 : unsent : Client단은 생성되었지만 open은 아직 호출 안 되었다.   
- 1 : opened : open호출됨   
- 2 : headers_received : send()호출됨 header와 status는 없다.   
- 3 : Loading : 로딩중   
- 4: done : 완료 . 데이터를 전부 받은 상태이다.   

---

이를 이용해서 서블릿 객체와 통신을 하는 샘플   
우리는 돔 객체의 클릭 이벤트에 load() 함수를 호출할 것이다.   
생성된 XMLHttpRequest객체의 onreadyStateChange의 콜백 내부에서 서버단 status코드를 받는다.   
해당 콜백을 실행하게 되면 status 로부터 서버단 응답코드를 받을 수 있다.   
(또 찾아보니 statusText로 응답코드 + 응답 메시지 또한 받을 수 있다고 한다. 200 ok와 같은.)   
open과  send를 이용해 요청을 보낼 수 있다.   

```java
function getParameterValues() {
	var name = encodeURIComponent(document.getElementById("name").value);
	var eng = document.getElementById("eng").value;
	var kor = document.getElementById("kor").value;
	var math = document.getElementById("math").value;
	return `?name=${name}&kor=${kor}&eng=${eng}&math=${math}`;
}

function load() {
	var url = `score.do${getParameterValues()}`;
	console.log(url)

	// ======= onreadyStateChange의 콜백 내부에서 서버단 status코드를 받는다. ()
	httpRequest = new XMLHttpRequest(); // 서버와 통신을 도와주는 객체  
	httpRequest.onreadystatechange = callback; // 처리할 함수 
	httpRequest.open("GET", url, true); // true : 비동기 / false : 동기 
	httpRequest.send(); // get : send() / post : send ("data")
}

function callback() {
	alert("readystate: " + httpRequest.readyState);
	console.log(httpRequest)
	if (httpRequest.readyState == 4) {
		alert("status : " + httpRequest.status);
		if (httpRequest.status == 200) {
			// responseText : 요청 후 응답받은 문자열 
			var obj = JSON.parse(httpRequest.responseText);
			document.getElementById("result").innerHTML = decodeURIComponent(obj, name) + "의 총점 : " + obj.sum + "\n 평균 :" + obj.avg;
		} else {
			alert("통신 실패!")
		}
	}
}
```