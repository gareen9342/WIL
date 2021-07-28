package list.arraylist.implementation;

public class ArrayList {
    private int size = 0; // 어레이의 사이즈, 몇 개의 데이터가 이 안에 있느냐..
    private Object[] elementData = new Object[100]; // 초기값은 100으로

    public boolean addLast(Object element) {
        elementData[size] = element;
        size++;
        return true;
    }

    public boolean add(int index, Object element) {

        // 넣고자 하는 인덱스 부분을 비워주기
        for (int i = size - 1; i >= index; i--) {
            elementData[i + 1] = elementData[i];
        }

        elementData[index] = element;
        size++;
        return true;
    }

    public boolean addFirst(Object element) {
        return add(0, element);
    }

    public Object remove(int index) {
        Object removed = elementData[index];
        for (int i = index; i < size; i++) {
            elementData[i] = elementData[i + 1];
        }
        size--;
        elementData[size] = null;
        return removed;
    }

    public Object removeFirst() {
        return remove(0);
    }

    public Object removeLast() {
        return remove(size - 1);
    }

    /**
     *
     * 배열이 장점을 여기서 가질 수 있다. RAM에 직접 액세스 가능하다.
     *
     */
    public Object get(int index) {
        return elementData[index];
    }

    public int size() {
        return size;
    }

    public int indexOf(Object o) {
        for (int i = 0; i < size; i++) {
            if (o.equals(elementData[i])) {
                return i;
            }
        }
        return -1;
    }

    public String toString() {
        String str = "[";
        for (int i = 0; i < size; i++) {
            str += elementData[i];
            if (i < size - 1) {
                str += ",";
            }
        }
        return str += "]";
    }

    public ListIterator listIterator() {
        return new ListIterator();
    }

    public class ListIterator {
        private int nextIdx = 0;

        public boolean hasNext() {
            return nextIdx < size();
        }

        public boolean hasPrevious() {
            return nextIdx > 0;
        }

        public Object next() {
            return elementData[nextIdx++];
        }

        public Object previous() {
            return elementData[nextIdx--];
        }
    }
}
