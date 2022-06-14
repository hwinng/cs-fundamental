import { TreeTraversalType } from "./TreeTraversalType";

export interface TreeADT<T> {
    isEmpty(): boolean;
    size(): number;
    height(): number;
    contains(value: T): boolean;
    add(value: T): boolean;
    remove(value: T): boolean;
    traverse(type: TreeTraversalType): T[] | null;
}