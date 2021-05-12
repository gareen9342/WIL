# Comparable, Comparator
sort 함수 호출시 기준을 만들어주는 메서드   




## Comparable

나 객체와 다른 객체를 비교
```java
compareTo(Other){


}

Arrays.sort(x)
```


```java
package com.compare;

public class Score implements Comparable <Object>{
	private String name;
	private int kor;
	private int eng;
	private int math;

	// 기본 생성자, 파라미터 4개 생성자
	// getter setter
	public Score(String name, int kor, int eng, int math) {
		this.name = name;
		this.kor = kor;
		this.eng = eng;
		this.math = math;
	}

...

	@Override
	public int compareTo(Object o ) {
	
		Score other = (Score) o;
		if(this.getKor() > other.getKor()) {
			return 1;
		}else if (this.getKor() < other.getKor()) {
			return -1;
		}
		return 0;
	}
}
```



### Comparator

심판 (객체 1과 객체 2를 비교)
정렬 대상 클래스의 코드를 직접 수정할 수 없는 경우, 또는 정렬 하고자 하는 객체에 이미 존재하고 있는 정렬 기준과 다른 정렬 기준으로 정렬을 하고 싶을 때



```java
public class MTest02 {
	public static void main(String[] args) {
		List<String> list = new ArrayList<String>();
		for (int i = 0; i < 11; i++) {
			list.add(i + "");
		}
		
		System.out.println(list);
		Collections.sort(list);
		System.out.println(list);
		Collections.sort(list, new MySort());
		System.out.println(list);
	}
}

class MySort implements Comparator<String>{
	@Override
	public int compare(String o1, String o2) {
		int tmp1 = Integer.parseInt(o1);
		int tmp2 = Integer.parseInt(o2);
		if(tmp1 > tmp2) {
			return 1;
		}else if(tmp1 < tmp2) {
			return -1;
		}
		return 0;
	}
}
```