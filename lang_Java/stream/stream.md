# Stream 이란?

Java 8 이전에는 배열 또는 컬렉션 인스턴스를 다루는 방법은 for또는 foreach 문을 돌면서 요소 하나씩을 꺼내서 다루는 방법었다.
하지만 로직이 복잡해진다면 코드의 양이 많아져 여러 로직이 섞이는 경우 루프를 여러 번 도는 경우가 발생한다. 

## ' 데이터의 흐름 '
배열 또는 컬렉션 인스턴스에 함수 여러 개를 조합해서 원하는 결과를 필터링하고 가공된 결과를 얻을 수 있다.

## 사용법
1. 생성하기 : 스트림 인스턴스 생성
2. 가공 : 필터링, 매핑 등 원하는 결과를 만들어가는 중간 작업
3. 결과 출력 : 최종적으로 결과를 만들어내는 작업

전체 -> 매핑 -> 필터링 -> ~ -> 결과 만들기 -> 결과물

## 배열 스트림 
Arrays.stream(arr)

## 컬렉션 스트립
인터페이스 내부의 디폴트 stream사용

--------------------------------------------------------

### Stream.builder()
빌더(Builder)를 사용하면 스트림에 직접적으로 원하는 값을 넣을 수 있다.
마지막에 build 메소드로 _스트림을 리턴합니다._

### Stream.generate() 
iterate 메소드를 이용하면 초기값과 해당 값을 다루는 람다를 이용해서 스트림에 들어갈 요소를 만든다. 
(초기값, 연산식)
_Stream<Integer> iteratedStream = Stream.iterate(30, n -> n + 2).limit(5);_ 

### 기본 타입형 스트림
제네릭을 사용하면 리스트나 배열을 이용해서 기본 타입(int, long, double) 스트림을 생성할 수 있다.

IntStream intStream = IntStream.range(1, 5); // [1, 2, 3, 4]
LongStream longStream = LongStream.rangeClosed(1, 5); // [1, 2, 3, 4, 5]

### 문자열 스트링
스트링을 이용해서 스트림을 생성할수도 있다.
char 는 문자이지만 본질적으로는 숫자이기 때문에 가능하다.

### 스트림 연결하기
stream.concat
Stream<String> stream1 = Stream.of("Java", "Scala", "Groovy");
Stream<String> stream2 = Stream.of("Python", "Go", "Swift");
Stream<String> concat = Stream.concat(stream1, stream2);

## 가공하기

### filtering
스트림 내 요소들을 하나씩 평가해서 걸러내는 작업.

Stream<String> stream = 
  names.stream()
  .filter(name -> name.contains("a"));

### Mapping
맵(map)은 스트림 내 요소들을 하나씩 특정 값으로 변환해줍니다. 이 때 값을 변환하기 위한 람다를 인자로 받습니다.


## 결과 만들기

### Calculating
최소, 최대, 합, 평균 등 기본형 타입으로 결과를 만들어낼 수 있다. 

long count = IntStream.of(1, 3, 5, 7, 9).count();
long sum = LongStream.of(1, 3, 5, 7, 9).sum();

### Reducing
reduce라는 메소드를 이요해서 결과를 만들어 낼 수 있다. 

총 세 가지의 파라미터를 받을 수 있다. 
accumulator : 각 요소를 처리하는 계산 로직, 각 요소가 올 때마다 중간 결과를 생성하는 로직
identity : 계산을 위한 초기값으로 스트림이 비어서 계산할 내용이 없더라도 이 값은 리턴.
combiner : 병렬(parallel) 스트림에서 나눠 계산한 결과를 하나로 합치는 동작하는 로직.

### Collecting
collect 메소드는 또 다른 종료 작업이다. Collector 타입의 인자를 받아서 처리하는데. Collectors객체에서 제공하고 있다. 

- Collectors.toList()

_List<String>_ collectorCollection =
  productList.stream()
    .map(Product::getName)
    .collect(Collectors.toList());

- Collectors.joining() 
스트림에서 작업한 결과를 하나의 스트링으로 이어 붙일 수 있습니다.

String listToString = 
 productList.stream()
  .map(Product::getName)
  .collect(Collectors.joining());
// potatoesorangelemonbreadsugar
