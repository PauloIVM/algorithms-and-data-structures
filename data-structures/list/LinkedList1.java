// Escrever insights da estrutura de dados
public class LinkedList1 {
    private Node head;
    private Node tail;
    private int length;

    class Node {
        int value;
        Node next;
    
        Node(int value) {
            this.value = value;
        }
    }

    public LinkedList1(int value) {
        Node newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // Tem um problema aqui. Embora o cara não possa inicializar esse cara sem passar um node, ele pode
    // apagar todos os nodes. Daí preciso implementar a lógica certinha nesse cenário.

    // O(1)
    public void append(int value) {
        Node newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    
    // O(1)
    public void prepend(int value) {
        Node newNode = new Node(value);
        if (length == 0) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    
    // O(n)
    public boolean insert(int index, int value) {
        if (index < 0 || index > length) return false;
        if (index == 0) {
            prepend(value);
            return true;
        }
        if (index == length) {
            append(value);
            return true;
        }
        Node newNode = new Node(value);
        Node temp = findByIndex(index - 1); // O(n)
        newNode.next = temp.next;
        temp.next = newNode;
        length++;
        return true;
    }

    // O(n)
    public boolean set(int index, int value) {
        Node temp = this.findByIndex(index); // O(n)
        if (temp == null) return false;
        temp.value = value;
        return true;
    }

    // O(n)
    // Parece que eu preciso percorrer a lista inteira para apagar o último, pois o último não tem a
    // referência do anterior. Por isso existe o double-linkedlist?
    public void removeLast() {
        if (length == 0) return;
        Node previous = this.head;
        Node curr = previous.next;
        while(curr.next != null) {
            previous = curr;
            curr = curr.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if (length == 0) {
            this.head = null;
            this.tail = null;
        }
    }

    // O(1)
    public void removeFirst() {
        if (length == 0) return;
        Node temp = head;
        head = head.next;
        temp.next = null;
        length--;
        if (length == 0) {
            tail = null;
        }
    }

    // O(n)
    public void remove(int index) {
        if (index < 0 || index >= length) return;
        if (index == 0) this.removeFirst(); // O(1)
        else if (index == length - 1) this.removeLast(); // O(n)
        else {
            Node prev = this.findByIndex(index - 1); // O(n)
            Node temp = prev.next;
            prev.next = temp.next;
            temp.next = null;
            length--;
        }
    }

    // O(n)
    public Node findByIndex(int index) {
        if (index < 0 || index >= length) {
            return null;
        }
        Node temp = head;
        for (int i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }

    // O(n)
    public void findByValue() {}

    // O(n)
    public void reverse() {
        if (length <= 1) return;
        Node temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        Node before = null;
        Node after = temp.next;

        while(after != null) {
            temp.next = before;
            before = temp;
            temp = after;
            after = after.next;
        }
        temp.next = before;

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
        LinkedList1 myList = new LinkedList1(12);
        myList.append(3);
        myList.append(2);
        myList.prepend(5);
        // myList.removeLast();
        myList.print();
        myList.reverse();
        myList.print();
    }
}
