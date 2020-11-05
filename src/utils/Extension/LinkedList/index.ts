/**
 * 🍀 LinkedList链表
 *
 * @function  add        向链表的尾部加入一个元素
 * @function  remove     删除某个元素
 * @function  head       返回链表的第一个元素
 * @function  indexOf    获取某个元素的位置指针
 * @function  elementOf  返回某个位置指针处的element
 * @function  addAt      在某个位置插入element
 * @function  removeAt   删除某个位置的元素
 */
export default class LinkedList {
  _head: unknown = null;

  length: number = 0;

  //
  private addLength() {
    this.length++;
  }

  //
  protected head() {
    return this._head;
  }

  //
  // protected add() {}
}

class ListNode {
  element = null;

  next = null;

  constructor(element: unknown, next?: unknown) {
    this.element = element;
    this.next = next;
  }
}
