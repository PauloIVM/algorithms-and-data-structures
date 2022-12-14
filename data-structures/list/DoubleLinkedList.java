public class DoubleLinkedList {
    private Node head;
    private Node tail;
    private int length;

    class Node {
        int value;
        Node next;
        Node prev;
    
        Node(int value) {
            this.value = value;
        }
    }

    public DoubleLinkedList(int value) {
        Node newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // O(1)
    public void append(int value) {
        Node newNode = new Node(value);
        if (length == 0) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
        this.length++;
    }

    // O(1)
    public void prepend(int value) {
        Node newNode = new Node(value);
        if (length == 0) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = head;
            head.prev = newNode;
            head = newNode;
        }
        length++;
    }

    // O(1)
    // Agora não preciso iterar o array inteiro mais
    public Node removeLast() {
        if (length == 0) return null;
        Node temp = tail;
        tail = tail.prev;
        tail.next = null;
        temp.prev = null;
        length--;
        if (length == 0) {
            head = null;
            tail = null;
        }
        return temp;
    }

    // O(1)
    public Node removeFirst() {
        if (length == 0) return null;
        Node temp = head;
        if (length == 1) {
            head = null;
            tail = null;
        } else {
            head = temp.next;
            head.prev = null;
            temp.next = null;
        }
        length--;
        return temp;
    }

    // O(n) ? Em tese ficou mais performático, mas o número de op seria O(n/2) que é O(n)
    public Node findByIndex(int index) {
        if (index < 0 || index >= length) {
            return null;
        }
        Node temp = head;
        if (index < (length / 2)) {
            for (int i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = tail;
            for (int i = length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    // O(n)
    public boolean set(int index, int value) {
        Node temp = findByIndex(index); // O(n)
        if (temp == null) {
            return false;
        }
        temp.value = value;
        return true;
    }

    // O(n)
    public boolean insert(int index, int value) {
        if (index < 0 || index >= length) {
            return false;
        }
        if (index == 0) {
            prepend(value);
            return true;
        }
        if (index == length) {
            append(value);
            return true;
        }
        Node newNode = new Node(value);
        Node before = findByIndex(index - 1);
        Node after = before.next;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
        length++;
        return true;
    }

    // O(n)
    public Node remove(int index) {
        if (index < 0 || index >= length) return null;
        if (index == 0) return removeFirst();
        if (index == length - 1) return removeLast();
        Node temp = findByIndex(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = null;
        temp.prev = null;
        length--;
        return temp;

    }

    public void print() {
        Node temp = this.head;
        System.out.print("\n[ ");
        while(temp.next != null) {
            System.out.print(temp.value + ", ");
            temp = temp.next;
        }
        System.out.print(temp.value + " ]\n");
    }

    public static void main(String[] args) {
        
    }
}
