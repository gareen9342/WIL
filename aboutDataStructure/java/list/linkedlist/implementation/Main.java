package list.linkedlist.implementation;

public class Main {
    public static void main(String[] args) {
        LinkedList numbers = new LinkedList();
        numbers.addFirst(30);
        numbers.addFirst(20);
        numbers.addFirst(10);

        numbers.addLast(10);
        numbers.addLast(40);
        numbers.addLast(50);

        numbers.add(1, 15);
        numbers.add(3, 45);
        System.out.println(numbers.node(2));
        System.out.println(numbers.toString());

        LinkedList.ListIterator i = numbers.listIterator();
        System.out.println(i.next());
        System.out.println(i.hasNext());

    }

}
