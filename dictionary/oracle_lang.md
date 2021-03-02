## 계정 관련

### 계정 확인

`SHOW USER;`

### 모든 계정 확인

`SELECT * FROM all_users;`

### SYS 계정으로 들어가기

SYS!DB_ID/as sysdba

비밀번호 입력 (그냥 엔터)

### 계정 생성

CREATE USER testuser IDENTIFIED BY "password"

### 다른 계정으로 넘어가기

`conn testuser/testuser`

다른 DB의 계정으로 넘어가는 것은 패스워드 뒤에 @다른DB_SID를 붙여준다.

`SQL>conn testuser/testuser@coreDB;`

conn 대신 connect 로도 대체 가능하다.

### 비밀번호 변경

ALTER USER <TESTUSER> INDENTIFIED BY "<CHANGEPASSWORD>"

### 계정 삭제

DROP USER <TESTUSER>

## 권한관련

- system 계정으로만 가능

### 접속 권한 주기

`GRANT CONNECT, RESOURCE testuser;`

### 사용자에게 권한 주기

```java
GRANT DELETE, INSERT, SELECT, UPDATE ON testdb TO testuser;
```

### DBA 권한 주기

`GRANT DBA TO testuser;`

## naming convention

- 엔티티 이름은 단수 여야하며 공백이있을 수 있습니다. 이는 테이블 생성 중에 Oracle Designer에 의해 '_'로 대체됩니다.
- 테이블 이름은 복수여야 합니다. 테이블 이름에 여러 단어가 포함 된 경우 마지막 단어 만 복수여야 합니다.
- 모든 엔티티와 테이블은 외래 키 정의의 일부로 사용되는 고유 한 별칭으로 정의되어야합니다. 별칭은 이름의 약어 여야합니다.
## COLUMN 관련
(ALTER)

### Column 이름 변경

Alter table 테이블명 CHANGE (컬럼명 바꿀컬럼명 컬럼타입);

```java
alter table dept CHANGE(jobid varchar2(6));
```

### 추가 (add)

Alter table 테이블명 add (컬럼명 데이터타입 [default 디폴트값]);

```java
SQL> alter table dept add (jobid varchar(10) default 'KBS',
	col1 number(3),
	col2 number(4)
)
```

### data type 변경 (modify)

Alter table 테이블명 modify(컬럼명 데이터타입(길이));

```java
alter table dept modify(jobid varchar2(6));
```

주의 해야 할 점은 (기존 컬럼에 데이터가 들어 있다면) 서로 호환 되는 것 끼리만 데이터타입의 변경이 가능 하다는 것이다(ex : varchar2->Char)

널 값은 데이터가 들어있지 않기 때문에 모든 변경이 가능하다.

### column삭제 (drop)

Alter table 테이블명 drop column 컬럼명;

```java
Alter table dept drop (col1, col2);
```

### Set unused option

mark만 하고 사용하지 않겠다는 의미. 후에 사용자가 없을 떄 column 삭제 작업을 진행한다.

`Alter table 테이블명 set unused (컬럼명, 컬럼명, 컬럼명);`

이렇게 해 두면 describe 명령어로 테이블 구조를 확인 해 보아도 나오지 않는다.

### ALTER table (제약조건 추가, 제약조건 삭제)

- 제약조건 추가
`ALTER TABLE emp ADD CONSTRAINT EMP_EMPNO_PK PRIMARY KEY(EMPNO);`
암시적으로 primary key에는 unique index가 생성된다.
- foreign key 제약조건 추가
 `alter table emp add constraint emp_mgr_fk foreign key(mgr) references emp(empno);`

주의 할 점 : not null 제약조건은 add가 아니라 modify 옵션을 써서 추가한다.

## TABLE관련

### 모든 테이블 보기

`SELECT * FROM TAB;`

### 테이블 구조 확인하기

DESC <TABLE NAME>

### CREATE TABLE

```java
CREATE TABLE testtable (
    test_id NUMBER(10) NOT NULL,
    test_name VARCHAR2(10) NOT NULL,
    test_date DATE NOT NULL
);
```

### 테이블 복제 (AS SELECT ~FROM **)

- 전체 복제
`CREATE TABLE 새로운 테이블명 AS SELECT * FROM 테이블명`
- 원하는 컬럼만 복제
`CREATE TABLE 새로운 테이블명 AS SELECT 컬럼명 FROM 테이블명`
- 구조(전체 컬럼) 만 복제
`CREATE TABLE 새로운 테이블명 AS SELECT * FROM 테이블명 WHERE 1=2;`

# CRUD

## INSERT

1. 일반적인 방법

    ```sql
    INSERT INTO 테이블 (COLUMN_LIST) VALUES (VALUE_LIST)

    -- 숫자일 경우 그대로 넣음, 문자형일 경우 '' 
    ```

2. SELECT 문으로 다수의 데이터 INSERT

    ```sql
    INSERT INTO 테이블명 (COLUMN_LIST)
    SELECT COLUMN_LIST FROM 조회 테이블명 WHERE 조회 조건

    --------example
    INSERT INTO PLAYER (PLAYER_ID, PLAYER_NAME, TEAM_ID, POSITION, HEIGHT, WEIGHT, BACK_NO)
    SELECT PLAYER_ID, PLAYER_NAME, TEAM_ID, POSITION, HEIGHT, WEIGHT, BACK_NO
    FROM PLAYER_BACKUP 
    WHERE PLAYER_NAME = '박지성'

    출처: https://hyeonstorage.tistory.com/294 [개발이 하고 싶어요]
    ```

## SELECT

검색

```sql
SELECT ~ FROM 테이블이름
```
WHERE 조건문

```sql
SELECT * FROM WHERE 컬럼 = 값

---

--이름이 '홍길동'인사람 검색
SELECT * FROM My_Table WHERE Nm_Kor ='홍길동' 

--나이가 25살인 사원의 한국이름과 나이 조회
SELECT Nm_Kor,Age FROM My_Table WHERE Age=25 

--나이가 25살이 아닌 사원 조회
SELECT * FROM My_Table WHERE Age<>25

--사원번호가 '0315' 이고 나이가 25살보다 작거나 이름이 '홍길동'인 사원 조회
SELECT * FROM My_Table WHERE No_Emp = '0315' AND (Age<25  OR Nm_Kor = '홍길동')

--사원번호가 '0315' 이거나 나이가 25살 이상이면서 이름이 '홍길동'인 사원 조회
SELECT * FROM My_Table WHERE No_Emp = '0315' OR (Age>=25 AND Nm_Kor = '홍길동')
```

Like(~로 시작,포함,끝나는 단어)

```sql
--'김'으로 시작하는 사원 조회
SELECT * FROM My_Talbe WHERE Nm_Kor LIKE '김%'

--김이 들어가는 시작하는 사원 조회
SELECT * FROM My_Talbe WHERE Nm_Kor LIKE '%김%'

--김으로 끝나는 사원의 사원번호 조회
SELECT No_Emp FROM My_Talbe WHERE Nm_Kor LIKE '%김'
```

In(~이거나)

```sql
--나이가 20살,24살,26살인 사원 조회
SELECT * FROM My_Table WHERE Age IN(20,24,26)

사원번호가 '0000','0004','0008'이고 나이가 20살 24살 28살인 사원 조회
SELECT * FROM My_Table Where No_Emp IN('0000','0004','0008)AND Age IN(20,24,28)

```

## UPDATE

## DELETE

## SEQUENCE

### 시퀀스란?

유일한 값을 생성해주는 오라클 객체

시퀀스를 생성하면 기본키와 같이 순차적으로 증가하는 컬럼을 자동적으로 생성할 수 있다.

보통 PRIMARY KEY 값을 생성하기 위해 사용한다.

메모리에 cache되었을 때 시퀀스 값의 액세스 효율이 증가한다. 

시퀀스는 테이블과는 독립적으로 저장되고 생성한다.

### 시퀀스 만들기

시퀀스를 만들 땐 괄호를 안 침

```sql
CREATE SEQUENCE 시퀀스명(
	INCREMENT BY 정수 (기본값 1) : 정수값 만큼 증감
	START WITH 정수 : 시작 번호
	MAXVALUE 정수 : 최대 값 지정
	MINVALUE 정수 : 최소값 지정
	CYCLE || NOCYCLE : 반복여부
	CACHE || NOCACHE : 정수값 만큼 미리 생성
);
```

### 시퀀스 불러오기

SELECT SEQ_EMPID01.NEXTVAL FOM DUAL;

NEXTVAL :  시퀀스의 다음 값 /  CURVAL : 시퀀스의 현재 값

## COMMIT/ ROLLBACK

데이터 제어 언어 (DCL; Data Control Language)

```sql
COMMIT / ROLLBACK : 데이터 트랜젝션 저장 / 취소
GRANT / REVOKE :권한 부여/ 삭제
```

## KEY관련

### PRIMARY KEY

PRYMARY KEY = UNIQUE + NOT NULL

유일 키를 만들어 주는 것

제약조건에 써주면 됨.

### FOREIGN KEY

```sql
CREATE TABLE TABLE_FK01(
	ID CHAR(3) PRIMARY KEY,
	NAME VARCHAR2(20),
	PKID CHAR(3) REFERENCES TABLE_PK01(ID)
);
INSERT INTO TABLE_FK VALUES (123,'ORACLE','100');
INSERT INTO TABLE_FK VALUES (124,'JAVA','200');
INSERT INTO TABLE_FK VALUES (125
/제목2,'ORACLE','300');
```

## 언어의 속성별 분류

### DDL (Data Definition Language)  : DB 스키마 정의, 조작

CREATE, ALTER, DROP

### DML ( Data Manipulation Language)  : Data 조작

SELECT, INSERT , UPDATE, DELETE

### DCL ( Data Control Language) : Data 제어

COMMIT, ROLLBACK, GRANT, REVOKE

## 단일 행 함수

### 문자 함수

입력값 : CHARACTER 

**LPAD / RPAD :(컬럼명, 길이, 값)**

: 해당 컬럼을 길이만큼 오른쪽/ 왼쪽 정렬한다.

: 빈 공간은 값을 채운다.

**LTRIM / RTRIM /  :(문자열 ,제거할 문자열)**

참고 사이트

[https://mine-it-record.tistory.com/60](https://mine-it-record.tistory.com/60)

특정한 문자를 제거한다. 제거할 문자를 입력하지 않으면 공백이 제거된다.

TRIM 말고 LTRIM 과 RTRIM 은 두글자 이상이 가능

: 문자열 제거, 패턴으로 제거가 아님

: 빈 공간은 값을 채운다.

**TRIM ( 제거한 문자 하나 FROM 문자열)**

Q1) ‘xyxzyyTech6 327xx’ 에서 양쪽의 x를 제거하자.

SELECT TRIM(‘x’ FROM ‘xyxzyyTech6 327xx’) FROM DUAL;

Q2) ‘xyxzyyTech6 327xx’ 에서 양쪽의 xy를 제거하자.

SELECT TRIM(‘xy’ FROM ‘xyxzyyTech6 327xx’) FROM DUAL;

**SUBSTR(컬럼 or 문자열, 시작위치 [, 반환할 개수])**

시작위치부터 반환할 객수만큼 문자열을 잘라서 반환

시작위치 = 0 or 1 : 처음
                     > 0 : 끝 방향으로 지정한 수 만큼

                     < 0 : 시작 방향으로 지정한 수 만큼

반환할 개수 < 0 : NULL 반환

```sql
SELECT SUBSTR(ENAME, -1) FROM EMP;// 가장 끝 1자리 리턴
```

**INSTR**

(컬럼 or 문자열, 찾으려는 문자(열)[, 시작위치 [, 횟수]])

찾는 문자(열)이 [시작 위치부터 [횟수만큼]] 나타난 시작 위치 반환

- 시작 위치 > 0 : 시작부터 끝 방향으로

< 0 : 끝부터 시작 뱡향으로

**LENGTH/ LENGTHB**

주어진 컬럼의 문자열(값)의 길이를 반환 (NUMBER/BYTE)
- 컬럼이 CHAR 인 경우 데이터의 길이와 상관없이 컬럼 전체 길이 반환

## JOIN

### INNER JOIN

별다른 조건절을 써주지 않고 JOIN 하면 자동적으로 INNER JOIN 된다. 

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11a9f820-4be9-40de-a668-64ee10d7f5b9/Screen_Shot_2021-01-04_at_1.07.37_AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11a9f820-4be9-40de-a668-64ee10d7f5b9/Screen_Shot_2021-01-04_at_1.07.37_AM.png)

```sql
SELECT * FROM M INNER JOIN S ON M1 = S1;
SELECT * FROM M JOIN S ON M1 = S1;
--같은 쿼리인데 오라클 쿼리로 변경
SELECT * FROM M, S WHERE M1= S1;
```

### OUTER JOIN

```sql
SELECT * FROM M LEFT OUTER JOIN S ON M1 = S1;

SELECT * FROM M, S WHERE M1 = S1 (+);

SELECT * FROM M RIGHT OUTER JOIN S ON M1 = S1;
SELECT * FROM M, S WHERE M1(+) = S1; -***- RiGHT OUTER JOIN이 왼쪽에 +가 있다. 중요~***
SELECT  * FROM M;
```

### CROSS JOIN

:모든 경우의 수를 나열한다. 

```sql
SELECT * FROM M CROSS JOIN S;
```