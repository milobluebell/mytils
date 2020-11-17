import LinkedList from '..';

class DoublyListNode {
  element = null;

  prev = null;

  next = null;

  constructor(element: unknown, prev?: unknown, next?: unknown) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

export default class DoublyLinkedList extends LinkedList {
  // 添加元素到头
  append(element) {
    const node = new DoublyListNode(element);
    if (this.$head === null) {
      // 如果链表中没有元素，则直接添加，并且修改指针。
      node.prev = this.findPrev();
      this.$head = node;
    } else {
      // 如果链表已经有元素 ，则添加到队尾
      let currentNode = this.$head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.prev = currentNode;
    }
    this.length++;
  }

  // 添加元素节点(到指定位置) - 会将对应位置的旧节点后移
  add(element, index: number) {
    if (!index && index !== 0) {
      // 没有输入index
      this.append(element);
    } else {
      let currentIndex = 0;
      let currentNode = null;
      let prevNode = null;
      let nextNode = null;
      while (currentNode.next) {
        if (index - 1 === currentIndex) {
          // 前一个元素
          prevNode = currentNode;
          // 要添加的位置原先的元素;
          nextNode = currentNode.next;
          // 当前元素
          const node = new DoublyListNode(element, prevNode, nextNode);

          // 为前一个元素指定next
          prevNode.next = node;
          nextNode.prev = node;
          break;
        }
        currentNode = currentNode.next;
        currentIndex++;
      }
      this.length++;
    }
  }

  //
  remove(element) {
    let currentNode = this.$head;
    let prevNode = null;
    while (currentNode.element !== element) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    currentNode.prev = prevNode;
    prevNode.next = currentNode.next;
    this.length--;
  }

  //
  removeAt(index: number) {
    let currentNode = null;
    const prevNode = null;
    let currentIndex = 0;
    while (currentNode.next) {
      if (index - 1 === currentIndex) {
        break;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    this.length--;
  }
}
