/**
apply, with, let, run 이들은 뭐가 다른 것인가...ㅠㅠㅋㅋ

출처 : https://medium.com/@limgyumin/%EC%BD%94%ED%8B%80%EB%A6%B0-%EC%9D%98-apply-with-let-also-run-%EC%9D%80-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80-4a517292df29
https://www.androidhuman.com/2016-07-06-kotlin_let_apply_run_with
*/
//https://medium.com/@limgyumin/%EC%BD%94%ED%8B%80%EB%A6%B0-%EC%9D%98-apply-with-let-also-run-%EC%9D%80-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80-4a517292df29

class Person(){
  var name: String? = null
  var age: Int? = null

  constructor(name :String, age:Int): this(){
    this.name = name
    this.age = age
  }

}

fun main(args: Array<String>) {
  val person: Person = Person("garin",11)
  println("basic person")
  println(person.name)
  println(person.age)

  // using with
  val personW: Person = Person("garin",11)
  println("with - person")
  with(personW){

    println(this)
    println(name)
    println(age)
  }

  // comparing "with" with "also"
  // with 에서는 수신객체가 매개변수 T로 제공된다. :: 명시적
  // also 에서는 T의 확장함수로 수신 객체가 암시적으로 제공된다.

  println("also - person")
  val personA : Person = Person("garin",17).also{
    println(it.name)
    println(it.age)
  }
}


/**
 *
 * let : 함수를 호출한 객체를 인자로 받는다. 이를 사용하여 다른 메서드를 실행하거나 연산을 수행해야 한ㄴ 경우 사용할 수 있다.
 *
 * fun <T, R> T.let(block: (T) -> R): R
 * 인수로 전달받은 놈을 쓸 수 있다는 것이 큰 장점점 *
 * 람다식의 인자가 하나인 경우 인자 이름을 생략하고 it를 사용하여 코드를 간략하게 할 수 있다.
 *
 * apply : 함수를 호출하는 객체를 이어지는 블록의 리시버(?!)로 전달하고, 객체 자체를 반홚낟.
 * -> 특정 객체를 생성 + 속성을 지정하거나 초기화 코드가 있는 경우
   *
 * val param = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT).apply {
      gravity = Gravity.CENTER_HORIZONTAL
      weight = 1f
      topMargin = 100
      bottomMargin = 100
    }

  run : 인자가 없는 익명함수처럼 동작하는 형태와 객체에서 호출하는 형태 두 가지로 존재한다.
  fun <T, R> T.run(block: T.() -> R): R
   해당 함수의 블럭내에서 처리할 작업들을 넣어줄 수 있다.
   호출하는 객체를 블록의 리시버로 전달한다. 함수의 결과값을 반환한다.
 *
 *-> run 함수같은경우는 익명함수처럼 사용할 수 있다는 것에 큰 장점과 자유도가 있는 것 같다.
 * -> apply 와 run 의 차이점은 새로운 객체를 만드느냐, 이미 만들어진 객체를 사용하며 함수를 연속적으로 실행할 수 있다는 것의 차이점
 *
 * with : 객체를 인자로 전달하게 된다. run 함수와 기능이 거의 동일함.
 *
 * fun <T, R> with(receiver: T, block: T.() -> R): R
 *
 *-> run은 safe call 지원, with는 안지원함...ㅎㅎ
 */