
public class Main {
    public static void main(String[] args) {
        ArrayList numbers = new ArrayList();
        numbers.addLast(10);
        numbers.addLast(20);
        numbers.addLast(30);
        numbers.addLast(40);
        numbers.addLast(50);

        numbers.add(1, 15);

        numbers.addFirst(5);

        numbers.remove(1);
        numbers.removeFirst();
        numbers.removeLast();

        System.out.println(numbers.toString());
        System.out.println(numbers.size());
        System.out.println(numbers.indexOf(20));

        /**
         * 다음 값을 가지고 오는 것은 iterator만한 것이 없다 ~ ListIterator를 써보자
         */
        ArrayList.ListIterator li = numbers.listIterator();

        // while(li.hasNext()){
        // System.out.println(li.next());
        // }
        System.out.println(li.next());
        System.out.println(li.previous());
    }
}