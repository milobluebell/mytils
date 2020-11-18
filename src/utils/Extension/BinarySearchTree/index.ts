class Node {
  value = null;

  left = null;

  right = null;

  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * 🍀 BinarySearchTree二分搜索树
 *
 * @function
 */
export default class BinarySearchTree {
  root = null;

  size = 0;

  //
  private appendChild(element) {
    console.log(this.size);
    return element;
  }

  //
  addNode(element) {
    if (!this.root) {
      // 如果是空树
      this.root = new Node(element);
    } else {
      // 如果不是空树
      this.root = this.appendChild(element);
    }
  }
}
