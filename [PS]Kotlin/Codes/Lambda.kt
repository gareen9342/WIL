// Kotlin lambda 파헤쳐보장

fun main(args: Array<String>) {
  // ==========Functions
  fun  hello() {
    println("Hello world")
  }

  println("Hi")

  hello()
  hello()
  hello()
  hello()
  hello()

  fun addAndPrint (number1: Int, number2:Int): Int  {
    val result : Int = number1 + number2
    println(result)
    return result
  }
  addAndPrint(3,4)

  // =============  lambda expression - 완전한 표현은 이렇게 파라미터와 리턴 값을 명시하고 중괄호 안에 식을 작성
  val sumPerfect : (Int,Int) -> Int = {x: Int, y:Int -> x + y}

  // 선언 자료형 생략
  val sum = {number1: Int, number2: Int -> number1 + number2}

  // 반환값이 없을 경우
  val out = () -> {println("hello world~")}
  println(sum(7,4))
}