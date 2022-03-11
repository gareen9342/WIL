심볼릭한 특정 값을 타입으로 사용하게 될 경우에 enum 클래스를이용해서 정의를 해두고 쓰면 해당 타입에 대해서 의미있게 사용할 수 있다. 

```java
public enum ItemType {
  BOOK(0),
  DVD(1),
  SOFTWARE(2);

  private final int _typecode;

  private ItemType(int typecode){
    _typecode = typecode;
  }

  public int getTypecode(){return _typecode;}
}
```


```java
public class UserType {
  public void use() {
    ItemType book = ItemType.BOOK; // 이렇게 사용할 수 있다.
    ItemType dvd = ItemType.DVD;

    int typecode = book.getTypecode();
    System.out.println(typecode);
  }
}
```