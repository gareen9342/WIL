
/*

arrayOf 업데이트 가능
ListOf : 업데이트 안됨
mutableListOf : 업데이트 가능


add로 추가할 수 있고 자바의 문법과 굉장히 유사함
*/
fun main(args: Array<String>) {
  // Arrays and Lists

  // creating List
  var topCandyArray : Array<String> = arrayOf("Snickers", "Fun Dip", "MilkyWay")
  val topCandy : List<String> = listOf("Snickers", "Fun Dip", "MilkyWay")
  val topCandyMutList : MutableList<String> = mutableListOf("Snickers", "Fun Dip", "MilkyWay")
  println(topCandy[0])
  /*
   * diffrence between list and array
   * => big difference is that you can not change the items in List but Array
   *
   */

  //topCandy[0] = "Black Thunder" // can not change and update order

  topCandyArray[0] = "change something" // allowed
  // mutable list
  topCandyMutList.add(0, "asdf")
  println("add asdf at 0"+topCandyMutList)// add asdf at 0[asdf, Snickers, Fun Dip, MilkyWay]

  topCandyMutList[0] = "Milkyway"
  println(topCandyMutList)//[Milkyway, Snickers, Fun Dip, MilkyWay]

  println(topCandyArray.size) // size
}