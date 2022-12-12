import java.util.ArrayList;
import java.util.HashMap;

public class Graph {
    private HashMap<String, ArrayList<String>> adjList = new HashMap<>();
    public static void main(String[] args) {
        Graph myGraph = new Graph();
        myGraph.addVertex("A");
        myGraph.addVertex("B");
        myGraph.addVertex("C");

        myGraph.addEdge("A", "B");
        myGraph.addEdge("A", "C");
        myGraph.addEdge("C", "B");

        myGraph.printGraph();

        // myGraph.removeEdge("A", "B");
        // myGraph.printGraph();

        myGraph.removeVertex("C");
        myGraph.printGraph();
    }

    public void printGraph() {
        System.out.println(adjList);
    }

    // O(1)
    public boolean addVertex(String vertex) {
        if (adjList.get(vertex) != null) {
            return false;
        }
        adjList.put(vertex, new ArrayList<String>());
        return true;
    }

    // O(1)
    public boolean addEdge(String vertex1, String vertex2) {
        ArrayList<String> vertex1List = adjList.get(vertex1);
        ArrayList<String> vertex2List = adjList.get(vertex2);
        if (vertex1List == null || vertex2List == null) {
            return false;
        }
        vertex1List.add(vertex2);
        vertex2List.add(vertex1);
        return true;
    }

    // O(n)
    public boolean removeEdge(String vertex1, String vertex2) {
        ArrayList<String> vertex1List = adjList.get(vertex1);
        ArrayList<String> vertex2List = adjList.get(vertex2);
        if (vertex1List == null || vertex2List == null) {
            return false;
        }
        vertex1List.remove(vertex2);
        vertex2List.remove(vertex1);
        return true;
    }

    // O(n)
    public boolean removeVertex(String vertex) {
        ArrayList<String> vertexList = adjList.get(vertex);
        if (vertexList == null) {
            return false;
        }
        vertexList.forEach(vrtx -> adjList.get(vrtx).remove(vertex));
        adjList.remove(vertex);
        return true;
    }
}
