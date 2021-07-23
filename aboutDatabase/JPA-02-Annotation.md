# JPA 애너테이션
JPA는 DB 테이블과의 매핑 정보를 설정하기 위해서 다양한 애너테이션을 제공하고 있다.    

## 애너테이션

- `@Entity` : JPA를 사용해서 테이블과 매핑할 클래스는 @Entity 애너테이션을 필수로 붙여야 한다. 엔티티임을 명시해준다. Entity가 붙은 클래스는 JPA가 관리하는 것으로, 엔티티라 부른다. 
- `@Table` : 엔티티와 매핑할 테이블 지정, 생략시 매핑할 엔티티 이름을 테이블 이름으로 사용    
- `@Id` : PRIMARY KEY 매핑     
- `@GeneratedValue` : 시퀀스 이용하여 키 생성시 설정해준다.      
- `@Column` : 객체 필드를 테이블 컬럼에 매핑   
- `@Enumerated` : 열거 타입 매핑     
- `@Temporal`: java.util.Date 타입 매핑시 사용하기    
- `@CreationTimestamp, @UpdateTimestamp` : 엔티티가 생성되거나 업데이트되는 시점의 날짜 데이터를 기록하는 설정   

_.. 그 밖의 많은 것은 차차 기록!_    