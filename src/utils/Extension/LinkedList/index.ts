class ListNode {
  element = null;

  next = null;

  constructor(element: unknown, next?: unknown) {
    this.element = element;
    this.next = next;
  }
}

/**
 * 🍀 LinkedList链表
 *
 * @function  head       返回链表的头节点信息
 * @function  findNode   查找某个元素的节点信息
 * @function  findIndex  查找某个位置的节点信息
 * @function  indexOf    查找某个元素所在的位置
 * @function  append     向头加入一个节点
 * @function  add        添加元素节点到指定位置 - 会将对应位置的旧节点前移
 * @function  shift      删除头部节点
 * @function  add        某个位置插入节点
 * @function  remove     删除指定元素的节点
 * @function  removeAt   删除指定位置的节点
 */
export default class LinkedList {
  $head = null;

  length = 0;

  //
  head() {
    return this.$head;
  }

  //
  findPrev(element = null) {
    let prevNode = null;
    let currNode = null;
    let result = this.$head;
    while (currNode.next) {
      prevNode = currNode;
      if (currNode.element === element) {
        result = prevNode;
        break;
      }
      currNode = currNode.next;
    }
    return result;
  }

  // 查找某个元素对应的节点信息
  findNode(element) {
    let currentNode = this.$head;
    let result = null;
    while (currentNode.next) {
      if (currentNode.element === element) {
        result = currentNode;
      }
      currentNode = currentNode.next;
    }
    return result;
  }

  // 查找某个位置的节点信息
  public findIndex(index: number) {
    let currentIndex = 0;
    let currentNode = this.$head;
    let node = null;
    while (currentNode.next) {
      if (index === currentIndex) {
        node = currentNode;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return node;
  }

  // 查找某个元素所在的位置
  indexOf(element: number) {
    let currentNode = this.$head;
    let currentIndex = -1;
    let index = 0;
    while (currentNode.next) {
      if (currentNode.element === element) {
        index = currentIndex;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return index;
  }

  // 添加元素到头
  append(element) {
    const node = new ListNode(element);
    if (this.$head === null) {
      // 如果链表中没有元素，则直接添加，并且修改指针。
      this.$head = node;
    } else {
      // 如果链表已经有元素 ，则添加到队尾
      let currentNode = this.$head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  // 添加元素节点(到指定位置) - 会将对应位置的旧节点前移
  add(element, index) {
    if (!index && index !== 0) {
      // 没有输入index
      this.append(element);
    } else {
      let currentIndex = 0;
      let currentNode = null;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        const node = new ListNode(element, currentNode);
        if (currentIndex === index) {
          prevNode.next = node;
        }
        this.$head = currentNode === null ? node : currentNode;
        currentIndex++;
      }
    }
    this.length++;
  }

  // 删除指定元素的节点
  remove(element) {
    let currentNode = this.$head;
    let prevNode = null;
    while (currentNode.element !== element) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
    this.length--;
  }

  // 删除指定位置的节点
  removeAt(index) {
    let currentNode = null;
    let prevNode = null;
    let currentIndex = 0;
    while (currentNode.next) {
      prevNode = currentNode;
      if (index === currentIndex) {
        prevNode.next = currentNode.next;
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    this.length--;
  }

  // 是否为空
  isEmpty() {
    return !!this.length;
  }
}
