# Singleton

> 메모리에 객체를 한번만 생성 (heap)

- private constructor를 가짐
- static 멤버 변수
- static method를 (getInstance) 가짐

- new 로 생성자 호출 불가 

## 형태
```java
public class Singleton {
    //2. 객체를 확인할 주소 (reference) 변수 선언
    private static Singleton singleton;
    
    //1. 생성자를 외부에서 사용할 수 없도록 private으로 선언 
    private Singleton(){
        System.out.println("singleton instance 생성");
    }
    
    //3.객체가 heap에 있는지 확인 -> 있으면 주소 값 리턴, 없으면 새로운 객체 생성
    public static Singleton getInstance(){
        if(singleton == null){  
            singleton = new Singleton(); 
            System.out.println();
        } else {
            System.out.println("exist");
        }
        return singleton;
    }
}
```
-> (멀티 스체드 환경일 경우 ) 여러 thread가 접근시 문제가 생길 가능성이 있다. 여러 스레드가 접근시 인스턴스가 여러 번 생성될 수 있음.    
thread-safe하게 바꾸어 줄 수 있다. 이것은 하단에서.     

```java 
public class Singleton { 
    private static Singleton instance; 
    
    private Singleton(){} 
    
    public static synchronized Singleton getInstance() {
        if(instance == null) { // 1번
            instance = new Singleton(); // 2번 
        }
        return instance; 
   } 
}

```
-> 이마저도 문제가 있다고 함. 동기화 오버헤드 
-> 동기화 오버헤드가 무엇인가 -> synchronized 키워드를 이용해서 동기화 영역을 표시해 줄 수 있다. 그리고 동기화 블록은 한 시점에 한 개의 쓰레드 만이 접근 가능.    
-> 그 블럭내의 어떤 쓰레드가 실행중이면 다른 쓰레드들은 blocked 상태. (암것도 못함.)     
-> 이 블록 안에 전달된 객체를 여러 쓰레드 들이 접근시에 함께 접근하려 한다면 기다려야 한다. 
   
여기서 오버헤드가 생긴다 한다.

오버헤드란 -> 어떤 처리를 하기 위해 들어가는 간접적인 처리 시간과 메모리 
-> 특정한 기능을 수행하기 위해 추가로 사용되는 컴퓨터 자원

왜? -> **block, unblock그 자체의 수행시간이 걸리기 때문.** 

그래서 LazyHolder 라는 게 등장
```java
public class Singleton {
  private Singleton() {}
  public static Singleton getInstance() {
    return LazyHolder.INSTANCE;
  }
  
  private static class LazyHolder {
    private static final Singleton INSTANCE = new Singleton();  
  }
}
```
-> static 영역에 초기화를 함. 근데 객체가 필요한 시점까지 초기화를 미루는 방식.    
-> LazyHolder클래스의 변수가 없기 때문에 Singleton 클래스 로딩시 LazyHolder 클래스를 초기화하지 않는다.   
-> getInstance가 호출되고, LazyHolder.INSTANCE를 참조하는 순간 LazyHolder 클래스가 로딩되고 초기화가 진행됨.


## 장점 
- 고정적인 메모를 가지며 메모리 낭비 방지    
- 두 번째 호출부터는 객체 로딩 시간이 준다.   
- 여러 클래스들이 데이터를 공유하기 쉽다.   

## 단점
- 너무 많은 일을 하거나 많은 데이터 공유시 서로 다른 클래스의 인스턴스들 간의 결합도가 높아져 개발-폐쇄 원칙이 위배됨.    
- 꼭 필요한 경우가 아니라면 지양. 