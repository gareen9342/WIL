# Input, output, File

## Stream

자료의 입출력을 도와주는 중간 매개체 

( 순서가 있는, **데이터의 연속적인 흐름** : 데이터를 받고, 출력하는 작업을 도와주는 중간 역할 )

단위는 byte

문자단위로 처리하느냐(Reader), 바이트 단위로 처리하느냐 (Stream)

### 문자 스트림 - 입력 (reader)

**BufferedReader - LineNumberReader**

- CharArrayReader

**InputStreamReader - FileReader**

- FilterReader - PushbackReader   
- PipedReader   
- StringReader   

### 문자 스트림 - 출력 (writer)

**BufferedWriter**

- CharArrayWriter

**OutputStreamWriter - FileWriter**

- FilterWriter
- PipedWriter
- StringWriter
- PrintWriter

### 바이트 스트림 - 입력바이트 (InputStream)

- FileInputStream
- PipedInputStream
- FilterInputStream - (... **BufferedInputStream**)
- SequenceInputStream
- StringBufferInputStream
- ObjectInputStream

### 바이트 스트림 - 출력바이트 (OutputStream)

- FileOutputStream
- PipedOutputStream
- FilterOutputStream
- ByteArrayOutputStream
- ObjectOutputStream

---

- Stream으로 끝나는 클래스 : 바이트 단위로 입출력을 수행하는 클래스    
- Reader/ Writer로 끝나는 클래스 : 캐릭터 단위로 입출력을 수행하는 클래스   
- File로 시작하는 클래스 : 하드디스크의 파일을 사용하는 클래스   
- Data로 시작하는 클래스 : 자바의 원시 자료형을 출력하기 위한 클래스    
- Buffered로 시작하는 클래스 : 시스템의 버퍼를 사용하는 클래스    

---

## Buffer ?

데이터를 전송하는 동안 일시적으로 그 데이터를 보관하는 메모리의 영역    
버퍼링이란 버퍼를 활용하는 방식 또는 버퍼를 채우는 동작을 말한다.    
데이터의 양이 적을 때는 차이가 별로 없다.   
하지만 양이 많을 때에는 버퍼에 한 번에 모아서 전달하는 BufferedReader클래스가 속도면에서 빠르고 효율적이다.    

---

## File

파일을 만들어 주는 객체

```java
new File("(파일 경로)+ 파일 이름")
```

파일 경로를 적어주지 않으면 해당 경로로 파일이 저장된다.

## FileInput/ FileOutput

- 반드시 종료를 시켜줘야 한다.
- 파일의 입출력을 담당해주는 객체

### 알아서 객체를 종료해주는 try(실행 객체)

```java
private static void MyInput(File fi) {
		/// 괄호 생성=> 자동으로 닫아준다. 클로즈 해야 하는 객체를 담아주면 알아서 함수 종료시 객체를 닫아준다. 
		try (FileReader fr = new FileReader(fi)) {
			int ch;
			while ((ch = fr.read()) != -1) {
				System.out.print((char) ch);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
```

### FileWriter()

- 파일을 작성해준다.

: write : 파일을 작성

: append : 끝에 문자열 붙여줌

### FileReader()

- 파일을 읽어준다.
- .read() 를 호출하여 내부에 읽을 요소가 있는지 검사할 수도 있다.

```java
int ch;
while ((ch = fr.read()) != -1) {
		System.out.print((char) ch);
}
```