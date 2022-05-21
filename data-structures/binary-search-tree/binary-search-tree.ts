import { Node } from "./node";
import { COMPARE_RESULT, defaultCompareFunction } from "./utils";

export default class BinarySearchTree {
    // TODO: Mudar essa notação para aKey e bKey, assim vai gerar confusão:
    compareFunction: (leftKey: number, rightKey: number) => -1 | 0 | 1;
    root: Node | null;

    constructor(
        compareFunction: BinarySearchTree["compareFunction"] = defaultCompareFunction,
    ) {
        this.compareFunction = compareFunction;
        this.root = null;
    }

    insert(key: number) {
        if (!this.root) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }

    search(key: string) {}

    inOrderTraverse(callback: any) {
        this.inOrderTraverseNode(this.root, callback);
    }

    preOrderTraverse(callback: any) {
        this.preOrderTraverseNode(this.root, callback);
    }

    postOrderTraverse(callback: any) {
        this.postOrderTraverseNode(this.root, callback);
    }

    min() {}

    max() {}

    remove(key: string) {}

    private inOrderTraverseNode(node: Node | null, callback: any) {
        if (node) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    private preOrderTraverseNode(node: Node | null, callback: any) {
        if (node) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    private postOrderTraverseNode(node: Node | null, callback: any) {
        if (node) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    private insertNode(node: Node, key: number) {
        if (this.compareFunction(key, node.key) === COMPARE_RESULT.LEFT_LESS_THAN_RIGTH) {
            if (!node.left) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (!node.right) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

tree.postOrderTraverse(console.log);
