/**
 * 🍀 Stack栈
 *
 * @function  push    向栈顶添加一个元素
 * @function  pop     弹出栈顶元素
 * @function  peek    查看栈顶的元素
 * @function  isEmpty 判断栈是否已空
 * @function  size    返回栈里元素的个数
 * @function  clear   清空栈
 */
export default class Stack {
  collection = [];

  push(item) {
    this.collection.push(item);
  }

  pop() {
    this.collection.pop();
  }

  peek() {
    return this.collection[this.collection.length - 1];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return !this.size();
  }

  clear() {
    this.collection = [];
  }
}
