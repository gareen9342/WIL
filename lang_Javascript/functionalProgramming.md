## 프로그래밍 패러다임

### 명령형 프로그래밍

 : 프로그래밍의 상태와 상태를 변경시키는 구문의 관점에서 연산을 설명하는 방식

- 절차지향 프로그래밍 : 수행되어야 할 연속적인 계산 과정을 포함하는 방식
- 객체지향 프로그래밍 : 객체들의 집합으로 프로그램의 상호작용을 표현

### 선언형 프로그래밍

: 어떤 방법으로 해야 하는지를 나타내기보다 무엇과 같은지를 설명하는 방식

- 함수형 프로그래밍  : 순수함수를 조합하고 소프트웨어를 만드는 방식

### 명령형과 선언형의 프로그래밍 비교

- 명령형 : 알고리즘을 명시하고 목표는 명시 안함
- 선언형 : 알고리즘 명시하지 않고 목표만 명시

## 코드를 비교하기

```jsx
// 명령형
function double (arr) {
  let results = []
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] * 2)
  }
  return results
}

function add (arr) {
  let result = 0
  for (let i = 0; i < arr.length; i++){
    result += arr[i]
  }
  return result
}

$("#btn").click(function() {
  $(this).toggleClass("highlight")
  $(this).text() === 'Add Highlight'
    ? $(this).text('Remove Highlight')
    : $(this).text('Add Highlight')
})

// 선언형
function double (arr) {
  return arr.map((item) => item * 2)
}

function add (arr) {
  return arr.reduce((prev, current) => prev + current, 0)
}

<Btn
  onToggleHighlight={this.handleToggleHighlight}
  highlight={this.state.highlight}>
    {this.state.buttonText}
</Btn>
```

## 함수형 프로그래밍에 필요한 개념

### 1급 객체 (First Object, 또는 1급 시민)

- 변수나 데이터 구조안에 담을 수 있다.
- 파라미터로 전달할 수 있다.
- 반환값으로 사용할 수 있다.
- 할다에 사용된 이름과 관계없이 고유한 구별이 가능하다.
- 동적으로 프로퍼티 할당이 가능하다.

### 고차함수 (High-Order Function)

: 람다 계산법에서 만들어진 용어로 아래 조건을 만족하는 함수

- 함수에 함수를 파라미터로 전달할 수 있다.
- 함수의 반환값으로 함수를 사용할 수 있다.

### 불변성 (Immutability)

- 함수형 프로그래밍에서는 데이터가 변할 수 없는데, 이를 불변성 데이터라고한다. (자바스크립트는 가능하지만 불가능한 언어들이 있다.)
- 데이터 변경이 필요한 경우, 원본 데이터 구조를 변경하지 않고 그 데이터를 복사본을 만들어 그 일부를 변경하고, 변경한 복사본을 사용해 작업을 진행한다.

### 순수 함수 (Pure function)

: 아래의 조건을 만족하는 함수

- 동일한 입력에는 항상 같은 값을 반환해야 한다.
- 함수의 실행은 프로그램의 실행에 영향을 미치지 않아야 한다.

 : side effect 가 없어야 한다. 함수 내부에서 인자 값을 변경하거나 프로그램의 상태를 변경하는 것

### 데이터 변환방법

- 함수형 프로그래밍은 데이터 변경이 불가능하기 때문에 기존 데이터의 복사본을 만들어 주는 도구들이 필요하다.
- 자바스크립트에는 이미 Array.map, Array.reduce등 데이터 복사본을 만들기 위한 함수들을 제공하고 있다.

---

### 규칙

- 모든 데이터는 변경이 불가능 해야한다.
- 함수는 순수 함수로 만든다. 인자를 적어도 하나 이상 받게 만들고, 데이터나 다른 함수를 반환해야 한다.
- 루프보다는 재귀를 사용한다.