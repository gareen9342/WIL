# String과 해당 내장 메서드들 정리

## String 객체와 메모리

문자열을 다루는 String 클래스(객체)는 데이터가 변화하면 메모리상의 변화가 많아 속도가 느리다.    
_만약에 문자열이 변경되면 기존의 객체를 버리고, 새로운 객체를 메모리에 생성한다._     
**(Immutable : 생성 후 변경 불가한 객체)**  
이때 기존 객체는 GC에 의해서 메모리 회수가 이루어진다.     
String을 생성하는 방법에는 두 가지가 있다.   

```java
String str = "string"; => String literal
String str2 = new String("string"); => string Object 
```

**String literal로 생성시 문자열은 힙영역의 String Pool 에 저장된다.**

**만약 문자열이 같으면 저장소가 공유된다.**

new 연산자로 생성하면 문자열은 힙영역에 저장되어 문자열이 같더라도 저장소 공유가 불가능하다.    
String 클래스는 문자열 연산이 적고, 자주 참조(조회)하는 경우에 사용하면 좋다.   
new 연산자를 통해 문자열을 생성하더라도 String  Pool에 등록하고자 한다면 inter()이라는 메서드를 이용하면 된다.   

### StringBuffer와 StringBuilder

String 과 다르게 StringBuilder, StringBuffer클래스는 변할 수 있다.
객체가 생성될 때 힙영역에 생성
속도는 StringBuilder가 조금 더 빠르며, 데이터 안정성은 StringBuffer 가 조금 더 좋다.
연산시 (append과 같은) 주소의 변경 없이 기존 객체의 공간이 부족하게 되면 기존 버퍼의 크기를 증가시키면서 새로운 문자열을 더해준다.  

**연산이 많아질 수록 String클래스보다 성능이 낫다**

### StringBuffer와 StrinngBuilder의 차이점

StringBuffer는 멀티스레드 환경에서의 동기화를 지원하지만 StringBuilder는 단일스레드 환경에서만 동기화를 지원한다
실무 사용시 StringBuffer 사용이 권장된다. 

## 내장 메서드

.length () 

toUpperCase()

toLowerCase()

toCharArray() → return char []

charAt(index)

indexOf(조건)
lastIndexOf : 해당 조건에 맞는 마지막 인덱스

replace → replace(바꿀 문자열, 바꿀 값)
replaceAll → replaceAll(바꿀 문자열 (정규식 가능), 바꿀 값)

codePointAt : 해당 인덱스의 unicode를 리턴

compareTo : 두 String 을 사전순으로 비교
compareToIgnoreCase : 대소문자 차이를 무시하고 사전 순으로 두 문자열을 비교

concat : 지정된 문자열을 문자열의 끝에 연결
contains(char) : 지정된 char이 포함되는지 
getBytes () : Bytes 단위로 인코딩하고 결과를 새 바이트 배열에 저장한다. return : byte[]

isEmpty() : length가 0인 경우  true

matches : 정규식과 일치하는지의 여부를 알려줌 return boolean

join: array to String
split : String to array

strip : 앞과 뒤의 whitespace제거

substring

valueof : Object → String

- String.valueOf() - 파라미터가 null이면 문자열 "null"을 만들어서 반환한다.
NPE방지시 사용한다.
- toString() - 대상 값이 null이면 NPE를 발생시키고 Object에 담긴 값이 String이 아니여도 출력한다.