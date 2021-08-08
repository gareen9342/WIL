# Thread, Runtime

## Thread   
> program process

- Program : 실행파일
- Process : 실행되고 있는 상태
- Thread : 작업 단위

---

Process (Runtime) : 응용프로그램 (.exe) 단위로 실행되는 모듈    
Runnable (Thread) : 하나의 Process 에 여러 개의 메소드 단위로 실행되는 모듈    
Process : - T, T, T, ...    

(process :  os에서 제어할 수 있는 가장 작은 단위)


### 자바에서 메소드 단위로 프로그램을 실행하는 방법 2가지   

1. Runnable을 implements (간단하게 실행할 때)
2. Thread를 extends( 기능 여러 개가 필요할 때 ) Thread간 양보, 죽이기 등...
- run 메소드 는 Thread.start가 자동 호출

### Runtime

응용프로그램 단위로 실행되는 모듈

```java
Runtime rt = Runtime.getRuntime(); // singleton
try {
	String[] path = {"/usr/bin/open", "-a", "/Applications/Google Chrome.app"};
	Process prc = rt.exec(path);
} catch (IOException e) {
	e.printStackTrace();
}
```

### Join

join: 해당 스레드가 종료될 때까지 다른 스레드를 멈춤

```java
public static void main(String[] args) {
		MyCalc thread01 = new MyCalc(1, 5);
		MyCalc thread02 = new MyCalc(6, 10);

		thread01.start();
		thread02.start();
		
		try {
			thread01.join();
			thread02.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		System.out.println("Thread01 sum = " + thread01.sum);
		System.out.println("Thread02 sum =" + thread02.sum);
		System.out.println("Total sum : " + (thread01.sum + thread02.sum));
	}
```