fun main(args: Array<String>) {
  var age: Int? = 28 // nullable
  age = 45
  age = null

  // to straight up to int object
  var newNumber = age!! // if the value is null then this will throw a NullPointerException
  class Dog{

  }
  var myDawg  :Dog? = Dog() // nullable class

  /**

  ?로 null 허용 값을 만들어줌.
  !!으로 다시 되돌린다
  */
}