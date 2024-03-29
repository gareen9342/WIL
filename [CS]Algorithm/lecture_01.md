## 알고리즘 이란?   

알고리즘은 수학과 컴퓨터 과학,언어학 또는 관련 분야에서 어떠한 문제를 해결하기 위해 정해진 일련의 절차나 방법을 공식화한 형태로 표현한 것을 말한다.

---

- 이 문제를 어떻게 푸는지 모르겠으니 어떻게든 스스로 풀어내는 것이 나쁜 생각은 아니다
- 하지만,인생은 짧고,시간은 없고,할 일은 많다
- 처음 공부할 때는 2-3일 고민해보는 것이 좋다.
- 어느 정도 익숙해진 이후에는 2-3시간 고민해보는 것이 좋고,
- 많이 익숙해진 이후에는 20-30분 고민해보는 것이 좋다.

---

## 효율성

알고리즘 문제를 해결하는 어떤 코드를 작성했을 때, 이 프로그램이 얼마나 효율적인지 알고 싶다

1. 수행 시간
2. 사용한 메모리
3. 코드의 길이

→ 수행 시간이 가장 중요하다. 

## 시간 복잡도

대게 문제의 크기를 N으로 나타내게 된다 .

시간 복잡도를 이용하면 작성한 코드가 시간이 대략 얼마나 걸리지 예상할 수 있다. 

표기법으로 대문자 O를 사용한다. 

**최악의 경우**에 시간이 얼마나 걸릴지 알 수 있다.

시간 복잡도 안에 가장 큰 입력 범위를 넣었을 때, 1억이 1초정도이다.

---

## 1초가 걸리는 입력의 크기

-  O(1)
• O(lgN)
• O(N):1억
• O(NlgN):5백만
• O(N^2):1만
• O(N^3): 500
• O(2^N): 20
• O(N!): 10

---

## 메모리

시간만 잘 지키면 메모리에 대해선 크게 생각할 필요는 없다.

보통 가장 많은 공간을 차지하는 것은 배열이다. 

이를 신경 쓴다면 메모리의 사용량은 신경쓰지 않아도 된다.

또한 불필요한 공간이 없다면, 대부분 메모리 제하은 알아서 지켜진다. 

---

## 입출력

 c의 경우에는 scanf/ printf를 사용할 수 있다. 

Java는 입력은 Scanner, 출력은 System.out을 사용한다. 

Scanner sc = new Scanner(System.in);

입력이 많은 경우에는 속도가 느리기 때문에, BufferedReader를 사용한다.

출력이 많은 경우에는 StringBuilder를 사용한다.