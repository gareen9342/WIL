# for, forEach, map 성능차이

## forEach, map 차이점

**공통점은 배열을 순회하며 연산을 진행할 수 있다는 것,**

[JavaScript - Map vs. ForEach](https://morioh.com/p/b2d058745cb8)

- forEach :  원본 배열을 변화시킨다. (mutate)
- map : 원본 배열 변화 x
- 속도 : 정말 작은 차이. map이 더 빠를 수 있는데 두 가지가 큰 차이가 없다

for > reduce > map >  forEach

## regular for loop

**→ 가장 빠름!**

→모든 원본 배열을 검사하지 않는다

→ 반복범위 컨트롤이 가능

→ 변수 활용 가능

## forEach

→ break과 같은 것으로 끊을 수는 없고, return 으로 멈출 수 있음.

→ return 값을 받을 수 없음

→ 원본 배열이 변화된다.

## map

→ 새로운 배열 리턴

***→ 같은 퍼포먼스에 대해서 확인하더라도, 브라우저별 차이가 굉장히 존재함.***

[자바스크립트 성능 최적화에 대한 의문이 들었다](https://velog.io/@zuyonze/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%98%EB%AC%B8-glk00t4bxk)