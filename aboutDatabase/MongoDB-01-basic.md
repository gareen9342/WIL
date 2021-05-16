# MongoDB?
NOSQL 데이터베이스. javascript 문법으로 디비를 제어할 수 있다는 것이 큰 장점    
데이터를 documents로 저장한다 . BSON으로 저장한다고 불리기도 하는데, 이는 Binary Json이라고 하는데, JSON을 바이너리로 인코딩한 포맷이다.    
주로 JSON형태의 데이터를 저장하거나 네트워크 전송하는 용도로 사용된다.   
( 텍스트 기반의 JSON은 구문 분석이 상대적으로 느려서 기계가 빠르게 읽을 수 있는 binary 형태로 변경하여 저장한 것이다. )   

공식 문서 : [The MongoDB 4.4 Manual - MongoDB Manual](https://docs.mongodb.com/manual/)     

## 특징

- 고정되지 않은 테이블 스키마 : 필요할 때마다 필드를 추가, 제거 가능 → 개발 속도 향상
- 데이터 간의 관계를 정의하지 않는 데이터베이스
- 분산형 구조 ( 대용량 데이터 저장 용이)
- sharding (클라스터 데이터 상호 복제) 
: sharding이란 ? 같은 테이블 스키마를 가진 데이터를 다수의 데이터베이스에 분산하여 저장.

## 용어

- document : collection안에 데이터 하나의 단위. field(key) 중복 불가, 대소문자 구분된다..
- Collection : document 그룹. (rdbms의 table), schema를 가지지 않는다. (document 들의 field가 각각 다를 수 있다. )
- database : collections의 물리적인 컨테이너. 하나의 MongoDB 서버는 여러 개의 데이터베이스를 소유할 수 있다.
- driver : client library

## Data 확인 관련 명령어

1. show dbs : 전체 database
2. db : 현재 database 확인
3. use <dbname> : 해당 database로 변경
4. show collections : 현재  database의 collection 목록

변수에 명령어를 저장하거나 또는 리턴되는 값들을 저장 할 수 있다.    
hasNext(), forEach(), toArray()등을 사용하여 저장된 document들을 사용할 수 있다.    

## 예약된 db name
admin : root db
local : 복제되지 않는 db (특정 서버에만 저장하는 collection에 사용) config : shard 정보 저장