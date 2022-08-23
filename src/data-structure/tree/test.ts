import BST from "./BST";
import Comparator from "./Comparable";
import { TreeADT } from "./TreeADT";

    /**
 *                   10
 *           6               15
 *      3        8      11       20
 *   0
 */

function comparator(val: number, nodeVal: number) {
  if (val < nodeVal) return -1;
  if (val > nodeVal) return 1;
  return 0;
}

const bst = new BST(comparator);
bst.add(10);
bst.add(6);
bst.add(15);
bst.add(3);
bst.add(8);
bst.add(11);
bst.add(20);
bst.add(0);
bst.add(4);

console.log('levelOrderTraverse: ', bst.levelOrderTraverse())
console.log('preOrderTraverse:', bst.preOrderTraverseRecursive())
console.log('inOrderTraverse:', bst.inOrderTraverse())
console.log('postOrderTraverse:', bst.postOrderTraverse())
console.log('height:', bst.height())
console.log('contains:', bst.size())

