import TreeNode from "./TreeNode";
import Comparable from "./Comparable";
import { TreeADT } from "./TreeADT";
import { TreeTraversalType } from "./TreeTraversalType";

class BST<T> implements TreeADT<T>, Comparable<T> {
    private nodeCount = 0;
    private _root: TreeNode<T> | null;
    comparator: (val: T, nodeVal: T) => number;

    constructor(comparator: (val: T, nodeVal: T) => number) {
        this._root = null;
        this.comparator = comparator;
    }

    isEmpty(): boolean {
        return this.size() == 0;
    }

    size(): number {
        return this.nodeCount;
    }

    height(): number {
        return this._getHeigth(this._root);
    }

    contains(val: T): boolean {
        return this._contains(this._root, val);   
    }
    
    add(value: T): boolean {
        if(this.contains(value)) return false;

        this._root = this._insertRecursively(this._root, value);
        this.nodeCount++;
        return true;
    }

    remove(val: T): boolean {
        if (!this.contains(val)) return false;
        this.nodeCount--;
        this._root = this._delete(this._root, val);
        return true;
    }

    traverse(type: TreeTraversalType) {
        switch (type) {
            case TreeTraversalType.PRE_ORDER: return this.preOrderTraverse();
            case TreeTraversalType.IN_ORDER: return this.inOrderTraverse();
            case TreeTraversalType.POST_ORDER: return this.postOrderTraverse();
            case TreeTraversalType.LEVEL_ORDER : return this.levelOrderTraverse();
            default: return null;
        }
    }

    // DLR: Root -> left -> right
    preOrderTraverse(): T[] {
        let stack = new Array<TreeNode<T> | null>();
        let visited = new Array<T>();

        stack.push(this._root);

        while(stack.length)  {
            let currentNode = stack.pop();
            if (currentNode && currentNode.getValue !== null) {
                visited.push(currentNode.getValue);
                if (currentNode.getRight) stack.push(currentNode.getRight)
                if (currentNode.getLeft) stack.push(currentNode.getLeft)
            }
        }
        return visited;
    }

    preOrderTraverseRecursive(): T[] {
        let visited = new Array<T>();
        let current = this._root;

        function _traverse(node: TreeNode<T>) {
            if (node && node.getValue !== null) {
                visited.push(node.getValue);
                if (node.getLeft) _traverse(node.getLeft);
                if (node.getRight) _traverse(node.getRight);
            }
        }

        if (current) _traverse(current);
        return visited;
    }

    // LDR: left -> root -> right
    inOrderTraverse(): T[] {
        let visited = new Array<T>();
        let current = this._root;

        function _traverse(node: TreeNode<T>) {
            if (node && node.getValue !== null) {
                if (node.getLeft) _traverse(node.getLeft);
                visited.push(node.getValue);
                if (node.getRight) _traverse(node.getRight);
            }
        }
        

        if (current) _traverse(current);
        return visited;
    }

    // LRD: left -> right -> root
    postOrderTraverse(): T[] {
        let visited = new Array<T>();
        let current = this._root;

        function _traverse(node: TreeNode<T>) {
            if (node && node.getValue !== null) {
                if (node.getLeft) _traverse(node.getLeft);
                if (node.getRight) _traverse(node.getRight);
                visited.push(node.getValue);
            }
        }

        if (current) _traverse(current);
        return visited;
    }

    // traverse level by level
    levelOrderTraverse(): T[] {
        // Create a queue to keep track of the nodes we have to visit
        let queue = new Array<TreeNode<T> | null>();
        // Create an array to store the visited node values
        let visited = new Array<T>();
        
        // Start traversing from the root node
        queue.push(this._root);
        // While the queue is not empty
        while (queue.length !== 0) {
            // Dequeue an element from the queue
            let currentNode = queue.shift();
            if (currentNode && currentNode.getValue !== null) {
                // Add the node value to the visited array
                visited.push(currentNode.getValue);
                // If current node has left child, add it to the queue to be visited for
                if (currentNode.getLeft !== null) queue.push(currentNode.getLeft);
                // If current node has right child, add it to the queue to be visited for
                if (currentNode.getRight !== null) queue.push(currentNode.getRight);
            }
        }
        return visited;
    }


    private _getHeigth(node: TreeNode<T> | null): number {
        if (node === null) return 0;
        const leftHeight = this._getHeigth(node.getLeft);
        const rightHeight = this._getHeigth(node.getRight);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    private _contains(node: TreeNode<T> | null, val: T): boolean {
        if(node === null || node.getValue === null) return false;

        let result: number = this.comparator(val, node.getValue);
        if (result > 0) return this._contains(node.getRight, val);
        else if (result < 0) return this._contains(node.getLeft, val);

        return true;
    }

    private _insert(val: T): boolean {
        let newNode = new TreeNode<T>(val);
        
        if (this._root === null) {
            this._root = newNode;
            return true;
        } else {
            let currentNode = this._root;
            let isTraversing = true;

            while(isTraversing) {
                // duplicated node value
                let result = 0;

                if (newNode.getValue && currentNode.getValue !== null) {
                    result = this.comparator(newNode.getValue, currentNode.getValue)
                }

                if (result === 0) {
                    isTraversing = false;
                    return false;
                }
                
                if(result < 0) {
                    // check if left node is existing
                    if (currentNode.getLeft === null) {
                        currentNode.setLeft = newNode;
                        isTraversing = false;
                        return true;
                    } else {
                        currentNode = currentNode.getLeft;
                    }
                } else {
                    if (currentNode.getRight === null) {
                        currentNode.setRight = newNode;
                        isTraversing = false;
                        return true;
                    } else {
                        currentNode = currentNode.getRight;
                    }
                }  
            }
            return true;
        }
    }

    private _insertRecursively(node: TreeNode<T> | null, ele: T): TreeNode<T> {
        if (node === null || node.getValue === null) {
            node = new TreeNode<T>(ele);
        } else {
            if (this.comparator(ele, node.getValue) < 0) {
                node.setLeft = this._insertRecursively(node.getLeft, ele)
            } else if (this.comparator(ele, node.getValue) > 0) {
                node.setRight = this._insertRecursively(node.getRight, ele)
            }
        }
        return node;
    }

    private _getMinRight(node: TreeNode<T>): TreeNode<T> {
        while(node.getLeft !== null) {
            node = node.getLeft;
        }
        return node;
    }

     private _delete(node: TreeNode<T> | null, val: T): TreeNode<T> | null {
        if (node === null || node.getValue === null) { return node }

        let result = this.comparator(val, node.getValue);

        if (result === 0) {
            if (node.getLeft === null && node.getRight === null) {
                return null;
            } else if (node.getLeft === null) {
                return node.getRight;
            } else if (node.getRight === null) {
                return node.getLeft
            } else {
                let tempNode = this._getMinRight(node.getRight)
                if (tempNode.getValue) {
                    node.setValue = tempNode.getValue
                    node.setRight = this._delete(node.getRight, tempNode.getValue);
                }
                return node
            }

        // recur down the tree
        } else if(result < 0) {
            node.setLeft = this._delete(node.getLeft, val);
            return node
        } else {
            node.setRight = this._delete(node.getRight, val);
            return node
        }
    }
}

export default BST;