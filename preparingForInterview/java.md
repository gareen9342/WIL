# Java 관련 면접 질문 대비하기

## Java의 대표 Collection 에는 어떤 것들이 있나요?

자바의 대표 Collection에는 List, Map, Set, Stack, Queue와 같은 것들이 있습니다. 

이 추상화된 Collection 인터페이스 아래, 특정한 기법으로 구현된 자료구조가 들어갑니다. 예를 들어 List라는 인터페이스에는 구현방법에 따라  ArrayList가 들어갈 수도 LinkedList 가 들어갈 수도 있습니다. 

## List에 대해 설명해주세요.

리스트는 배열과 비슷한 자바의 자료형으로 배열보다 편리한 기능을 많이 가지고 있습니다. 

List 에는 대표적으로 ArrayList와 LinkedList가 있습니다. ArrayList는 Vector를 개선한 배열로 구현된 List 입니다. 

배열과 같은 자료구조이기 때문에 리스트의 연산 수행시간 속도는 배열과 같다. 

LinkedList는 다음 노드의 주소를 기억하고 있는 List 로, 배열에 비해 삽입과 삭제가 간단하다는 장점이 있다. 하지만 탐색의 경우에 첫 번쨰 노드부터 탐색해야 하므로 상대적으로 느리다는 단점이 있다.

## Map에 대해 설명해주세요.

Map에는 HashMap, TreeMap, LinkedHashMap 이 있다. 

그 중 HashMap은 가장 일반적으로 사용하는 Map 이다.

HashTable을 사용하며 Key값에 해시함수를 적용하여 나온 index에 value를 저장하는 식이다. 

중복을 허용하지 않으며, 순서가 없다는 것이 특징이라고 할 수 있다. 

TreeMap은 Red-Black Tree자료구조를 이용한 Map이고 Tree 구조 이기 때문에 어느 정도 순서를 보장한다. 

LinkedHashMap은 LinkedList로 구현된 HashMap 이다. 

## Set에 대해 설명해주세요.

Set에는  HashSet, TreeSet, LinkedHashSet이 있다. 

HashSet은 HashMap에서 Key값이 없는 자료형이고 집합이라고 생각해도 무방하다.

값이 포함되어 있는지 아닌지에만 관심이 있고 순서를 보장하지 않으며, 중복값을 허용하지 않는다. Set중에는 가장 많이 사용된다. 

## Stack, Queue

Stack과  Queue 모두 데이터를 기록하는 자료구조이며,Stack은 마지막에 넣은 요소가 먼저 나오는ㄴ 특징이 있는데에 반해 

Queue는 스택과 반대 개념으로 먼저 들어간 데이터가 먼저 나오는 구조이다. 

Deque 은  스택과 큐를 합친 형태 이다. 

## Array와 ArrayList의 다른 점이 뭔가요?

Array는 길이에 대해서 length변수를 쓰고, ArrayList는 Size()메서드를 사용한다. 

Array는 길이가 고정되어 있지만, ArrayList는 사이즈가 동적인 배열이다. 

Array는 int, byte, char등과 같은 Primitive Type과 Object 모두 담을 수 있지만,ArrayList는 Object 만 담을 수 있다.