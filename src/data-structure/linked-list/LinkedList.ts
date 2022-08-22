import Node from "./Node";

class LinkedList {
    private _head!: Node;

    get head() {
        return this._head;
    }

    set head(node: Node) {
        this._head = node;
    }
    print() {
        let node: Node | null = this.head;
        while(node !== null) {
            console.log("data node:", node.data);
            node = node.next;
        }
    }

    /**
     * Insert a new node at the front of linked list
     */
    push(val: number) {
        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    /**
     * Insert a new node at a given position
     */
    insert(prevNode: Node,  val: number) {
        if (prevNode == null) {
            throw new Error("Given node cannot be null")
        }
        const newNode = new Node(val);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }

    /**
     * Insert new node at the rear of linked list
     */
    append(val: number) {
        const newNode = new Node(val);
        // check if linked list is empty
        if (this.head == null) {
            this.head = newNode;
        }

        // else traverse to the last node of linked list
        let last = this.head;
        while(last.next != null) {
            last = last.next;
        }

        last.next = newNode;
        newNode.next = null;
    }

    /**
     * Given a value, find and remove node that are representing this value
     * @param val 
     */
    delete(val: number) {
        let tempNode = this.head;
        let preNode: Node | null = null;
        
        // if head node holds val
        if (tempNode != null && tempNode.next != null && tempNode.data == val) {
            this.head = tempNode.next;
        }

        // traverse to find the node that holds the val
        while(tempNode != null && tempNode.next != null && tempNode.data != val) {
            preNode = tempNode;
            tempNode = tempNode.next;
        }

        // not found any node 
        if (tempNode == null) {
            return
        }

        if (preNode) {
            preNode.next = tempNode.next;
        }
    }
}

export default LinkedList;