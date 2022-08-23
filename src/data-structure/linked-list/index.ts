import LinkedList from "./LinkedList";
import Node from "./Node";
class Main {

    test() {
        /* Start with the empty list. */
        const llist: LinkedList = new LinkedList();
  
        llist.head = new Node(1);
        let second: Node = new Node(2);
        let third: Node = new Node(3);
  
        llist.head.next = second; // Link first node with the second node
        second.next = third; // Link second node with the third node
  
        llist.append(4);
        llist.insert(second, 10);
        llist.push(0);
        llist.delete(10);
        llist.print();
    }
}

const runner = new Main();

runner.test();