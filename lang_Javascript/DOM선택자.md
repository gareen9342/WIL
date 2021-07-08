# DOM 선택자

## alert, prompt, confirm

1. alert : 경고창
2. Prompt : 입력 값을 String 타입으로 반환하며 입력 값이 없을 경우 Null 리턴
3. confirm : true, false 값을 리턴 받을 수 있음

## getElementby... 와 querySelector의 차이

### getElementBy...

1. 처리속도가 빠르다
2. 리턴값이 HTML Collection
3. getElementById
    - id로 찾기. 단일 Element 객체 리턴
    - var myElement = document.getElementById('dd')
4. getElementByTagName
    - tag 명으로 찾기, 반복문 사용 가능 ,
5. getElementByClassName
    - class 명이 ~인 모든 요소

### querySelector

1. 기존 DOM보다 편리하게 CSS 패턴으로 DOM객체에 접근 가능
2. 리턴값이 Nodelist (index number only)

## childNodes와 querySelectorAll 의 차이

1. 둘다 Nodelist를 반환하지만 childNode는 동적이고 querySelectorAll 은 정적이다.

[HTMLCollection과 NodeList 살펴보기](https://devsoyoung.github.io/posts/js-htmlcollection-nodelist)

## HTML Collection과 NodeList 차이

1. 공통점
    - array.from()으로 배열로 변경 가능
    - length , for 사용 가능, map 사용 불가
    - 유사배열이며 배열이 아니다. ( valueOf(), pop(), push(), join() 사용 불가)
2. 차이점 
- HTMLCollection

    (1) name, id, index number로만 접근 가능

    (2) forEach 사용 불가

- NodeList

    (1) index number로만 접근 가능
    (2) forEach 사용 가능
    (3) text node가 포함될 수 있음(?)

    ```jsx
    var node_list = document.querySelectorAll('li'); //NodeList 객체
    var collection = document.getElementsByTagName('li'); // HTML Collection 객체 var text_node = null;
    try {
    collection[0].style.color = "red" // 인덱스 번호로 접근 가능 collection.namev.style.color = "red"; // id 접근 가능 collection.idv.style.color = "red"; // name 접근 가능
    } catch (err) {
    document.write("HTML Collection 에러 - " + err + "<br>");
    }
    try {
    node_list[1].style.backgroundColor = "orange"; // 인덱스번호로 접근 가능 node_list[2].style.backgroundColor = "orange"; // item() 메서드 접근 가능 node_list.namev.style.backgroundColor = "orange"; // name 접근이 안됨 예외발생
    } catch (err) {
    document.write("NodeList 에러 - " + err + "<br>");
    }
    ```