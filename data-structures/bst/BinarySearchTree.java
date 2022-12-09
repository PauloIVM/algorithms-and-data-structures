public class BinarySearchTree {
    private Node root;

    public static void main(String[] args) {
        BinarySearchTree myBST = new BinarySearchTree();
        myBST.insert(47);
        myBST.insert(21);
        myBST.insert(76);
        myBST.insert(18);
        myBST.insert(52);
        myBST.insert(82);
        
        myBST.insert(27);
        System.out.println(myBST.root.left.right.value);
        System.out.println(myBST.contains(82));
        System.out.println(myBST.contains(27));
        System.out.println(myBST.contains(100));
    }

    // Omega (best case) and Theta (average case) are both (log n). However, worst case is O(n) and Big O measures worst case.
    // Perfect Tree -> O(log(n))
    // Worst-case -> O(n)
    public boolean insert(int value) {
        Node newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return true;
        }
        Node temp = this.root;
        while (true) {
            if (newNode.value == temp.value) return false;
            if (newNode.value < temp.value) {
                if (temp.left == null) {
                    temp.left = newNode;
                    return true;
                }
                temp = temp.left;
            } else {
                if (temp.right == null) {
                    temp.right = newNode;
                    return true;
                }
                temp = temp.right;
            }
        }
    }

    // Perfect Tree -> O(log(n))
    // Worst-case -> O(n)
    public boolean contains(int value) {
        Node temp = root;
        while (temp != null) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

class Node {
    int value;
    Node left;
    Node right;

    Node(int value) {
        this.value = value;
    }
}