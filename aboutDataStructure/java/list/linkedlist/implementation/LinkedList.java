package list.linkedlist.implementation;

/**
 * CPU : 생각하고 계산하고 연산하는 것, 처리속도가 가장 빠름 MEMORY : 용량 작고 컴터 끄면 데이터 사라짐, 메모리가 스토리지
 * 보다 훨씬 더 빠르게 데이터를 저장 STORAGE : SSD, HDD 와 같은 저장장치, 가격이 저렴하다, 용량이 크고 전원을 꺼도
 * 데이터가 저장됨
 *
 * CPU는 메모리로부터 직접적으로 스토리지로부터 데이터를 가져다 쓰지 않고 메모리를 거침
 *
 * 자료구조의 미션은 메모리의 효율적인 사용 RAM에서 ArrayList는 메모리를 일렬로 차지하는 개념이면 LinkedList는 랜덤적인 한
 * 공간 차지 비용은 거진 3배정도의 차이가 남..
 *
 * 하나의 Node, Vertex -> Data field + Link field , HEAD : 첫 범째 노드가 어디인지에 대한 것 +
 * TAIL : 마지 노드가 어디인가에 대한 것 java 에서는 객체지향이므로 객체로 표현함.
 *
 */
public class LinkedList {
    private Node head;
    private Node tail;
    private int size = 0;

    private class Node {

        private Object data; // 해당 노드의 데이터
        private Node next; // 누가 다음 노드인가

        public Node(Object input) {
            this.data = input;
            this.next = null;
        }

        public String toString() {
            return String.valueOf(this.data);
        }
    }

    public void addFirst(Object input) {
        Node newNode = new Node(input);
        newNode.next = head; // 기존의 헤드를 다음 노드로
        head = newNode; // 헤드를 새로운 노드
        size++;

        if (head.next == null) {
            tail = head;
        }
    }

    public void addLast(Object input) {
        if (size == 0) {
            addFirst(input);
        } else {
            Node newNode = new Node(input);
            tail.next = newNode;
            tail = newNode;
            size++;
        }
    }

    public Node node(int index) {
        // 앞에서부터 세도록 구현하기
        Node x = head;
        for (int i = 0; i < index; i++) {
            x = x.next;
        }
        return x;
    }

    public void add(int k, Object input) {
        if (k == 0) {
            addFirst(input);
        } else {
            // 일단 추가할 노드의 앞의 노드를 알아낸다
            Node temp1 = node(k - 1);
            Node temp2 = temp1.next; // 추가할 노드의 다음노드
            Node newNode = new Node(input);
            temp1.next = newNode;
            newNode.next = temp2;
            size++;
            if (newNode.next == null) {
                tail = newNode;
            }
        }
    }

    public String toString() {
        if (head == null) {
            return "[]";
        }
        Node temp = head;
        String str = "[";

        while (temp.next != null) {
            str += temp.data + ", ";
            temp = temp.next;
        }
        str += temp.data;

        return str + "]";
    }

    public Object removeFirst() {
        Node temp = head;
        head = head.next;
        Object returnData = temp;
        temp = null;
        size--;
        return returnData;
    }

    public Object remove(int k) {
        if (k == 0) {
            return removeFirst();
        }
        // 일단 삭제하려는 노드의 이전 노드를 찾음
        Node temp = node(k - 1);
        Node todoDeleted = temp.next; // 삭제할 노드도 변수에 담아주기; 피신시켜줌..
        temp.next = temp.next.next;
        Object returnData = todoDeleted.data;
        if (todoDeleted == tail) {
            tail = temp;
        }
        todoDeleted = null;
        size--;
        return returnData;
    }

    public Object removeLast() {
        return remove(size - 1);
    }

    public int size() {
        return size;
    }

    public Object get(int k) {
        return node(k).data;
    }

    public int indexOf(Object data) {
        Node temp = head;
        int index = 0;
        while (temp.data != data) {
            temp = temp.next;
            index++;

            if (temp == null) { // 마지막에 도달
                return -1;
            }
        }
        return index;
    }

    public ListIterator listIterator() {
        return new ListIterator();
    }

    class ListIterator {
        private Node next;
        private Node lastReturned;
        private int nextIndex;

        ListIterator() {
            next = head; // 처음 생성시 next 값은 head로 지정하낟.
        }

        // ======= next는 현재 가리키고 있는 노드의 값을 리턴한다. 그리고 다음 노드를 가리킬 수 있도록 구현된다. =======//
        public Object next() {
            lastReturned = next;
            next = next.next;
            nextIndex++;
            return lastReturned.data;
        }

        // ======= hasNext는 다음 노드가 있는지 , nextIndex < size =======//
        public boolean hasNext() {
            return nextIndex < size();
        }

        // ========= add =========//
        public void add(Object input) {
            Node newNode = new Node(input);
            head = newNode;
            newNode.next = next;
            lastReturned = newNode;

            nextIndex++;
            size++;
        }
    }

}
