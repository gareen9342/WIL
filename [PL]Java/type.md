# type

기본 형태   

```java
Type 변수 = 값;
```

- type :  값의 모양, 값의 형태    
- 메모리에 값을 할당하는 것    
- 값 자체 : lliteral    
- 기본타입: call by value ( Immutable)    
  정수형 실수형 문자형 논리형    
- 참조타입  : call by reference (mutable)    

## 정수형 타입

- byte ( 1byte)    
- short ( 2byte)    
- int ( 4byte )    
- long ( 8byte)    

```java
byte b1 = 10;
byte b2 = 20;
byte sum = b1 +b2;
System.out.println(sum) // 오류발생
//byte로 형변환을 해주어야한다. 
```

### 2진수(0b) 8진수(00) 16진수(0x)

```java
System.out.println(0b10);//2
System.out.println(0010);//8
System.out.println(0x10);//16
```

## 실수형 타입

- float    
- double    

```java
public class Type03 {
	//실수형 타입 float, double
	public static void main(String[] args) {
		float f1 = 0.1f;
		float f2 = 0.9f;
		float sum = f1 + f2;
		System.out.println( sum +" = "+ f1 + "+"+ f2);
		System.out.println("\n\n---------------\n\n");
		double d1 = 100.04; 
		double d2 = 9.06d;
		System.out.println("d1 = "+d1+"d2 ="+d2 + "d1 + d2"+ (d1 + d2));
	}
}
```

## 문자형 타입

- char( 문자형)    
    - int 로 변환이 가능하다    
- String ( 문자열 )    

## 논리형 타입

- boolean    

## 자바가 선점해놓은 단어들 (이건 자바 언어)

abstract continue for new switch
assert default if package synchronized    
boolean do goto private this
break double implements protected throw    
byte else import public throws    
case enum instanceof return transient
catch extends int short try    
char final interface static void    
class finally long strictfp volatile    
const float native super while    

_ (underscore)