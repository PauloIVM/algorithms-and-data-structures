export class Node {
    left: Node | null;
    right: Node | null;
    key: number;
    constructor(key: number) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
