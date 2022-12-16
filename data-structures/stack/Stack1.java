/**
 * INFO: LIFO -> Last In, First Out
 * INFO: Pode ser implementada tanto com um arraylist quando com um linkedlist
 */

public class Stack1 {
    private Node top;       // Or head???
    private int height;     // Or length
    // private Node bottom; // Or tail      // Not needed

    class Node {
        int value;
        Node next;
    
        Node(int value) {
            this.value = value;
        }
    }

    public Stack1(int value) {
        Node newNode = new Node(value);
        top = newNode;
        height = 1;
    }

    public void push(int value) {
        Node newNode = new Node(value);
        if (height == 0) {
            top = newNode;
        } else {
            newNode.next = top;
            top = newNode;
        }
        height++;
    }

    public Integer pop() {
        if (height == 0) return null;
        Node temp = top;
        top = top.next;
        temp.next = null;
        height--;
        return temp.value;
    }

    public void print() {
        Node temp = this.top;
        System.out.print("\n[ ");
        while(temp.next != null) {
            System.out.print(temp.value + ", ");
            temp = temp.next;
        }
        System.out.print(temp.value + " ]\n");
    }

    public static void main(String[] args) {
        Stack1 myStack = new Stack1(2);
        myStack.push(4);
        myStack.push(6);
        myStack.print();
        Integer el = myStack.pop();
        System.out.println(el);
        myStack.print();
    }
}
