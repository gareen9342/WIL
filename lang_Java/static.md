# static 변수와 static 메서드
   
## static이란?

_Java에서 Static 키워드를 사용한다는 것은 메모리에 한 번 할당되어 프로그램이 종료될 때 해제되는 것을 의미한다._
   
-> 일반적으로 우리가 만든 class는 static 영역에 생성되고, new 연산을 통해 생성한 객체는 Heap영역에 생성된다. 객체의 생성시에 할당된 heap영역의 메모리는 GC를 통해 수시로 관리를 받는다.

->  Static으로 키워드를 통해 할당된 메모리는 모든 객체가 공유하는 메모리라는 장점을 지니지만, GC의 관리 영역 밖에 존재하므로 자주 사용하면 프로그램의 종료시까지 메모리에 할당된 채로 존재하므로 퍼포먼스에 악영향을 주게 된다.
  
-> Static 변수는 클래스 변수이다.

## static 변수
메모리에 고정적으로 할당되어, 프로그램이 종료될 때 해제되는 변수
   
-------------------------------------------------------------

### static 예시

Java에서 Static 변수는 메모리에 한번 할당되어 프로그램이 종료될 때 해제되는 변수로, 메모리에 한번 할당되므로 여러 객체가 해당 메모리를 공유하게 됩니다. 이해를 높이기 위해 코드를 추가하도록 하겠습니다.

예를 들어, 세상 모든 사람의 이름이 'MangKyu'인 세상에 살고있다고 가정을 하겠습니다. 이럴때면 우리는 아래와 같이 객체를 만들 수 있습니다.
   
```java
public class Person {
    private String name = "MangKyu";
	    
	public void printName() {
	    System.out.println(this.name);
	}
}
```
    
하지만 위와 같은 클래스를 통해 100명의 Person 객체를 생성하면, "MangKyu"라는 같은 값을 갖는 메모리가 100개나 중복해서 생성되게 됩니다. 이러한 경우에 static을 사용하여 여러 객체가 하나의 메모리를 참조하도록 하면 메모리 효율이 더욱 높아질 것입니다. 또한 "MangKyu"라는 이름은 결코 변하지 않는 값이므로 final 키워드를 붙여주며, 일반적으로 Static은 상수의 값을 갖는 경우가 많으므로 public으로 선언을 하여 사용합니다. 이러한 이유로, 일반적으로 static 변수는 public 및 final과 함께 사용되어 public static final로 활용 됩니다.
   
```java
public class Person {
    public static final String name = "MangKyu";
         
    public static void printName() {
        System.out.println(this.name);
    }
}
```
   
### Static메서드   
Static Method는 _객체의 생성 없이_ 호출이 가능하며, _객체에서는 호출이 불가능합니다._ 일반적으로는 유틸리티 관련 함수들은 여러 번 사용되므로 static 메소드로 구현을 하는 것이 적합한데, static 메소드를 사용하는 대표적인 Util Class로는 java.uitl.Math가 있습니다. 우리는 해당 클래스를 아래와 같이 사용합니다.

```java
public class Test {
    private String name1 = "MangKyu";
    private static String name2 = "MangKyu";
 
    public static void printMax(int x, int y) {
        System.out.println(Math.max(x, y));
    }
         
    public static void printName(){
       // System.out.println(name1); 불가능한 호출
       System.out.println(name2);
    }
}
```   

우리는 두 수의 최대값을 구하는 경우에 Math클래스를 사용하는데, static 메소드로 선언된 max 함수를 초기화 없이 사용합니다. 하지만 **static 메소드에서는 static이 선언되지 않은 변수에 접근이 불가능**한데, 메모리 할당과 연관지어 생각해보면 당연합니다. 우리가 Test.printName() 을 사용하려고 하는데, name1은 new 연산을 통해 객체가 생성된 후에 메모리가 할당됩니다. 하지만 static 메소드는 객체의 생성 없이 접근하는 함수이므로, 할당되지 않은 메모리 영역에 접근을 하므로 문제가 발생하게 됩니다. 그러므로 **static 메소드에서 접근하기 위한 변수는 반드시 static 변수로 선언되어야 합니다**   

## 실제 static변수와 Static메소드의 활용

### 1) Static 변수

```java
public final class AppConstants {
 
    public static final String APP_NAME = "MyApp";
    public static final String PREF_NAME = "MyPref";        
 
}
```

### 2) Static 메소드

마찬가지로 상속을 방지하기 위해 final class로 선언을 하고, 유틸 관련된 함수들을 모아둔다.

```java
import java.text.SimpleDateFormat;
import java.util.Date;
import android.util.Patterns;
 
public final class CommonUtils {
 
    public static String getCurrentDate() {
        Date date = new Date();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyMMdd");
        return dateFormat.format(date);
    }
     
    public static boolean isEmailValid(String email) {
        return Patterns.EMAIL_ADDRESS.matcher(email).matches();
    }
     
}
```
