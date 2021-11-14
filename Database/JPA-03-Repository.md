# Repository interface, query methods


>JPA에서는 단순히 Repository 인터페이스를 생성한 후 JpaRepository<Entity, 기본키 타입> ..등을 상속받으면 기본적인 CRUD가 자동으로 생성된다.     


-> 기본적으로 네 가지가 있다. <T : Entity의 타입 클래스 , ID : PK 값의 Type>     

1. Repository<T, ID>   
2. CurdRepository<T, ID>   
3. PagingAndSortingRepository<T, ID>    
4. JpaRepository<T, ID>   

대표적으로 한 가지만 메모해놓는다.  

## CRUD Repository interface
- `long count ()` : 사용 가능한 엔티티 수를 반환한다, 
- `void delete(T entity)` : 주어진 엔ㅣ티를 삭제한다.     
- `void deleteAll ()` : 저장소에서 관리하는 모든 엔티티를 삭제한다.    
- `deleteById()` : 주어진 엔티티를 삭제한다.     
- `boolean existsById(ID id)` : 주어진 ID를 가진 엔티티가 존재하는지 여부를 리턴     
- `Iterable<T> findAll()` : T타입의 모든 인스턴스를 반환한다.     
- `Iterable<T> findAllById(Iterable<ID> ids)` : 주어진 ID를 가진 T타입의 모든 인스턴스를 반환한다.     
- `void delete(T entity)` : 사용 가능한 엔티티 수를 반환한다,     
...

## 쿼리메서드
JPA는 메서드의 이름만으로 원하는 query 를 실행할 수 있는 방법을 제공한다.   

### 기본구조 
- find...By...    
- read...By...    
- query...By...    
- get...By...    
- count...By...    

### 쿼리메서드 지원 키워드
And, Or, Is, Equals, Between, LessThan, LessThanEqual, GreaterThan, GreaterThanEqual, After, Before, IsNull, Null, IsNotNull, NotNull, Like, NotLike, StartingWith, EndingWith, Containing, OrderBy, Not, In, NotIn, True, False, IgnoreCase

## JPQL
Java Persistance Query Language, JPA에서 사용하는 객체지향 쿼리 언어    
데이터 베이스 SQL쿼리 언어와 유사하지만 테이블과 컬럼이름 대신 매핑한 엔티티 이름과 속성이름을 사용    

### 객체지향 쿼리
엔티티 객체를 대상으로 하여 여러 검색 조건을 사용하여 엔티티 객체를 조회할 수 있느 쿼리    
SPQL, QueryDSL   

- JPQL : 엔티티 객체를 조회하는 객체지향 쿼리   
- Criteria 쿼리 : SPQL을 편하게 작성하도록 도와주는 빌더 클래스 제공    
- QueryDSL : Criteria 쿼리와 비슷한 기능을 하지만 비표준 오픈소스 프레임워크   
- 네이티브 SQL : JPA에서 SQL을 직접 사용할 수 있다.    

```java
    @Query("SELECT m FROM Member m WHERE m.userId = ?1")
    pubilc List<Member> getList01(String userId);
```

## Querydsl
쿼리메소드나 @Query를 이용하는 경우에는 고정적인 쿼리만을 만든다. **동적인 상황에 대한 처리**를 하려면 Querydsl을 이용해야 한다.    
Querydsl 의 dsl은 'Domain Specific Language'의 약자로 특정 도메인 객체를 조회한다는 의미이다.    
**동적인 쿼리를 작성하는 방법은 Criteria라는 것도 있지만 Querydsl이 편리**

### 사용법
1. QuerydslPredicateExecutor를 상속받는다.   
2. QuerydslRepositorySupport를 상속받고 사용자 정의 리포지토리를 구현한다.     