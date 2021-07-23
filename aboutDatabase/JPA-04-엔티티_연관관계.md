# 엔티티 연관관계 만들기
출처 : 실전 스프링부터 REST API 개발 JPA + MySQL (개정판)    
>1:1, 1:N, M:N, 단방향, 양방향 관계에 대해 연관관계를 만들어 주어야 한다.    

## 연관관계 매핑 키워드 
- 방향 (Direction)
    : 단방향, 양방향 / 객체 관계에서만 존재하고 테이블 관계를 항상 양방향이다.
- 다중성 (Multiplicity)
    : 다대일(N:1), 일대다(1:N), 일대일(1:1), 다대다(N:M)
- 연관관계의 주인 (owner)
    : 엔티티를 양방향 연관관계로 설정하면 객체 관계의 참조는 둘인데 테이블 외래 키는 하나다.
    : 양방향 연관관계를 매핑할 때 두 연관관계 중 하나를 연관관계의 주인으로 정해야 한다. 
    : 연관관계의 주인은 외래 키를 관리(등록, 수정, 삭제)할 수 있고, 주인이 아닌 쪽은 읽기만 할 수 있다. 
    : 연관관계의 주인을 정할 때 mappedBy 속성을 사용하는데 mappedBy 속성을 사용하지 않은 쪾이 주인이 된다. 

## 연관관계 애너테이션 

### @JoinColumn
-> 외래키를 매핑할 때 사용, 생략가능   


**속성**   
name -> 매핑할 외래 키 이름을 지정, 기본값은 필드명 + _ + 참조하는 테이블의 기본 키 컬럼명    
referencedColumnName => 외래 키가 참조하는 대상 테이블의 기본 키 컬럼명    

### @ManyToOne
-> 다대일 관계에서 사용. 다중성을 나타내는 애너테이션은 필수   
**속성**
fetch  -> 글로벌 패치 전략을 설정, 다대일이나 일대일은 FetchType.EAGER 이고 일대다는 FetchType.LAZY   
cascade -> 영속성 전이 기능    

### @OneToMany
-> 일대다 관계에서

### @OneToOne
-> 일대일 관계에서


### @ManyToMany
-> 다대다 관계에서

### @JoinTable
-> 다대다 관계를 일대다, 다대일 관계로 풀어내기 위해 필요한 연결 테이블을 매핑할 때 사용한다. 


## 내장 타입 사용하기
- @Embeddable : 어딘가 내장될 수 있음.
- @Embedded : 내장타입

### 예시

```java
@Entity
//@Table (name = "user") 이런 방법으로 관리하는 것도 가능하다.
@Getter @Setter
public class Member {
    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String name ;
============================ 이렇게 주소라는 내장타입을 가져와줌
    @Embedded
    private Address address;

    @OneToMany(mappedBy = "member") // order 테이블에 있는 멤버라는 이름의 필드로 매핑된다는 뜻
    private List<Order> orders = new ArrayList<>();
}

```
====== 주소는 앞쪽에 Enbeddable 명시 
```java
@Embeddable // ㅇㅓ딘가에 내장이 될 수 있다.
@Getter
public class Address {

    private String city;
    private String street;
    private String zipcode;

    protected Address(){}

    public Address(String city, String street, String zipcode) {
        this.city = city;
        this.street = street;
        this.zipcode = zipcode;
    }
    /*
     *   웬만하면 setter는 쓰지 않는 것이 실무에서 유용하다.
     *   왜냐면 누구나 변경을 하게 되면 위험하고 유지보수상 귀찮아지는 경우가 많기 때문
     *   그렇기 때문에 protected를 통해 누군가 코드를 보고 쉽게 생성자 호출을 하지 않는 것을 의도한다.
     *
     */


    /**
     *
     * 엔티티 설계시 주의점
     *
     * : 엔티티에는 가급적 Setter를 사용하지 말자
     *
     * : 모든 연관관계는 지연로딩으로 설정
     * - 즉시로딩 은 예측이 어렵고, 어떤 SQL이 실행될지 추적하기 어렵다. 특히 JPOL을 실행할 때 N+1문제가 자주 발생하낟.
     * - 실무에서 모든 연관관계는 지연로딩(LAZY)로 설정해야 한다.
     * - 연관된 엔티티를 함께 DB에서 조회해야 하면,  fetch join또는 엔티티 그래프 기능을 사용한다.
     *
     *  즉시로딩 : 데이터를 조회할 때 연관된 데이터를 전부 조회하는 것
     *  => 예측이 어렵고 어떤 SQL이 조회될 지 예측하기 어렵다.
     *
     *  지연로딩 : 원하는 엔티티만 딱 집어서 가져올 수 있는 기능..
     *  => 모든 연관관계는 모두 이걸로 설정하는 것이 좋다.
     *
     */
}
```


- Date 타입지정은 LocalDateTime을 쓰면 하이버네이트가 대신 해준다.   
- Enum 타입 지정은 Enumarated 어노테이션을 꼭 넣어야 함 EnumType은 String으로. 디폴트가 ORDINAL인데 이대로 두면 숫자로 들어간다. 그래서 1,2,3이런 식으로 할당되었다가,   중간에 다른 값이 들어가면 난리 남...    

### 다대다 관계

A도 B를 다수를 가지고 있을 수 있고  B도 A를 다수 가지고 있을 수 있기 때문에 

관계형 테이블에서의 중간 테이블을 명시해주어야 한다. 

```java
@Entity
@Getter @Setter
public class Category {

    @Id @GeneratedValue
    @Column(name = "category_id")
    private Long id;
    private String name;

/// ===============이 부분도~ 이런 식으로 서로 다대다 관계를 만들어 줄 수 있다. 
    @ManyToMany
    @JoinTable(name = "category_item",
        joinColumns = @JoinColumn(name = "category_id"),
        inverseJoinColumns = @JoinColumn(name = "item_id")
    ) // 테이블 관계 매핑
    private List<Item> items = new ArrayList<>();

//================= 계층있는 카테고리 관계를 이렇게 스스로를 매핑하면서 해결할 수 있다. 
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "parent_id")
    private Category parent;

    @OneToMany(mappedBy = "parent")
    private List<Category> child = new ArrayList<>();

    public void addChildCategory(Category child){
        this.child.add(child);
        child.setParent(this);
    }
}
```

```java
@Entity
@Inheritance (strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "dtype")
@Getter @Setter
public class Item {

    @Id @GeneratedValue
    @Column (name = "item_id")
    private Long id;

    private String name;
    private int price;
    private int stockQuantity;

	// ============= 이부분!!
    @ManyToMany(mappedBy = "items")
    private List<Category> categories = new ArrayList<>();

    public void addStock(int quantity) {
        this.stockQuantity += quantity;
    }

    public void removeStock(int quantity)
    {
        int restStock = this.stockQuantity - quantity;
        if(restStock < 0)
        {
            throw new NotEnoughStockException("need more stock");
        }
        this.stockQuantity = restStock;
    }
}
```