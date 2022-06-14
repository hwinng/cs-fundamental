import Comparator from "./Comparable";

class TreeNode<T> {
  private _value: T | null;
  private _left: TreeNode<T> | null;
  private _right: TreeNode<T> | null;

  public get getValue(): T | null {
    return this._value;
  }

  public set setValue(v: T | null) {
    this._value = v;
  }

  public get getLeft(): TreeNode<T> | null {
    return this._left;
  }

  public set setLeft(node: TreeNode<T> | null) {
    this._left = node;
  }

  public get getRight(): TreeNode<T> | null {
    return this._right;
  }

  public set setRight(v: TreeNode<T> | null) {
    this._right = v;
  }

  constructor(value: T) {
    this._value = value;
    this._left = null;
    this._right = null;
  }
}

export default TreeNode;