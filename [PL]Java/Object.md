### Object


#### 다형성

- Object는 모든 객체가 상속받는 부모이므로 다형성 활용 가능하지만, 한계점이 많다.Object
- Object를 통해 전달 받은 객체를 호출하려면 각 객체에 맞는 다운캐스팅괒어이 필요하다.
  - Object가 세상의 모든 메서드를 알고 있는 것이 아니다.

  다형성을 제대로 활용하려면 다형적 참조 + 메서드 오버라이딩 함께 사용해야함.

#### Object 배열

```java
Dog dog = new Dog();
Cat cat = new Cat();

Object[] objects = {dog, cat};
// Object[] objects = new Object[2];

private static void size(Object[] objects){
// 이 메서드는 object 타입만 사용. 세상에 모든 객체를 담을 수 있기 때문에, 새로운 클래스가 추가되거나 변경되어도 이 메서드ㅡㄹ 수정하지 않아도 된다.
  System.out.println(objects.length);
}

```

#### Object가 없다면?

- 모든 객체를 받을 수 있는 메서드를 만들 수 없다.

- `Object[] objects` 처럼 모든 객체를 저장할 수 있는 배열을 만들 수 없다.
