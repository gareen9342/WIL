# find & queries

## find
db.collection.find(query, projection )   

query :  쿼리문   
projection: 출력할 field 결정 (1 : true, 0: false)    

```jsx
db.collection.find({}, {_id : 0, name : 1})
```

## 비교쿼리

`{ 필드: {<쿼리조건이름>: 값 } }` 

- $eq : 일치하는 값 (ex : { 필드: { $eq: 값 } })    
- $ne : 일치하지 않는 것    
- $gt : greater than    
- $gte : greater than or equal   
- $lt: less than     
- $lte : less than or equal   
- $in : 주어진 array에서 일치하는 값들 중 하나인 필드    
- $nin : 주어진 array에서 일치하는 값들이 아닌 것    

## 논리 쿼리

- $and : 여러 개의 조건을 모두 만족하는 다큐먼트    
`{ $and: [ { <조건1> }, { <조건2> } , ... , { <조건N> } ] }`

- $or  : 여러 개의 조건 중에 적어도 하나를 만족하는 다큐먼트     
`{ $or: [ { <조건1> }, { <조건2> }, ... , { <조건 N> } ] }`

- $not : 뒤의 조건을 만족하지 않는 다큐먼트       
`{ field: { $not: { <operator-expression> } } }`

- $nor : 여러 개의 조건을 모두 만족하지 않는 다큐먼트 (!조건1 && !조건2...)      
`{ $nor: [ { <expression1> }, { <expression2> }, ... { <expressionN> } ] }`

## Element

- $exists :  해당 필드가 존재해야 하는지 하지 않아야 하는지 ( null 도 필드가 있는 것 )
` { <필드> : {$exists : <boolean>} } `
- $type : 주어진 데이터 타입과 일치하는 다큐먼트 선택.
` { <필드>: { $type: <BSON type> } } `

## 평가

- $expr : 집계함수 사용시 사용.    
- $jsonSchema : 주어진 JSON스키마에 대해 유효성 검사    
- $mod : 나머지 구하기   
- $regex : 정규표현식 검색    
- $text : 텍스트 검색, textindex가 있어야함( 어떤 속성에 있는 값에 대해서 검색을 할건지 지정하는 것 한 collection당 하나의 textindex만 가능하다. )   
`{ $text: { $search: 문자, $language: 언어, $caseSensitive: 대소문자구별 } }`    
텍스트가 단위별로 쪼개져서 or연산으로 검색이 되는데, 이게 싫을 경우 "\"단어\"" 이렇게 검색   
특정 키워드를 포함하지 않는 것 : -단어    


텍스트 인덱스 : [text index](https://docs.mongodb.com/manual/core/index-text/)    
`db.collections.createIndex({"subject":"text"})`    
$where : 자바스크립트 문법을 사용해 검색   
ex ) this.field1 === this.field2    

## Array

$all : 주어진 쿼리에서 모든 요소들과 일치하는지 $and의 주어진 value랑 일치하는 지 판단 하는 것과 같음..
`{ tags: { $all: [ "ssl" , "security" ] } }`

→ and로 변환
`{ $and: [ { tags: "ssl" }, { tags: "security" } ] }`