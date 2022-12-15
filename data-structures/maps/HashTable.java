import java.util.ArrayList;

public class HashTable {
    private int size = 7;
    private Node[] dataMap;

    public static void main(String[] args) {
        HashTable myHashTable = new HashTable();
        
        myHashTable.set("nails", 100);
        myHashTable.set("tile", 50);
        myHashTable.set("lumber", 80);
        myHashTable.set("bolts", 200);
        myHashTable.set("screws", 140);

        // myHashTable.printTable();
        // System.out.println(myHashTable.get("tile"));
        System.out.println(myHashTable.keys());
    }

    public HashTable() {
        this.dataMap = new Node[size];
    }

    public void printTable() {
        for (int i = 0; i < dataMap.length; i++) {
            System.out.println(i + ":");
            Node temp = this.dataMap[i];
            while (temp != null) {
                System.out.println("    {" + temp.key + "= " + temp.value + "}");
                temp = temp.next;
            }
        }
    }

    public ArrayList<String> keys() {
        ArrayList<String> allKeys = new ArrayList<>();
        for (int i = 0; i < dataMap.length; i++) {
            Node temp = this.dataMap[i];
            while (temp != null) {
                allKeys.add(temp.key);
                temp = temp.next;
            }
        }
        return allKeys;
    }

    // O(1) se estiver bem distribuído. No pior caso é O(n), parece com o a pegadinha da BST
    public Integer get(String key) {
        int index = this.hash(key);
        Node temp = this.dataMap[index];
        while (temp != null) {
            if (temp.key == key) {
                return temp.value;
            }
            temp = temp.next;
        }
        return null;
    }

    // O(n) -> Eu não cheguei a implementar esse cara... mas aqui é uma pegadinha... um get dando match pelo
    // value teria que percorrer todos os elementos (full-scan).
    public Integer getByValue(Number value) { return 0;}

    // O(1) se estiver bem distribuído. No pior caso é O(n), parece com o a pegadinha da BST
    public void set(String key, int value) {
        int index = this.hash(key);
        Node newNode = new Node(key, value);
        if (dataMap[index] == null) {
            dataMap[index] = newNode;
        } else {
            Node temp = dataMap[index];
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    private int hash(String key) {
        int hash = 0;
        char[] keyChars = key.toCharArray();
        for (int i = 0; i < keyChars.length; i++) {
            int ascciValue = keyChars[i];
            hash = (hash + ascciValue * 23) % dataMap.length;
        }
        return hash;
    }

    class Node {
        String key;
        int value;
        Node next;
        Node(String key, int value) {
            this.key = key;
            this.value = value;
        }
    }
}
