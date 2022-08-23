class Node {
    data: number;
    next: Node | null;

    constructor(val: number) {
        this.data = val;
        this.next = null;
    }    
}

export default Node;