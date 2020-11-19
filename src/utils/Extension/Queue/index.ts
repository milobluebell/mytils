/**
 * 🍀 Queue队列
 *1
 * @function  enqueue    入列，向队尾部添加一个元素，返回成功与否。允许根据优先级降序排列。
 * @function  dequeue    出列，移除队列头部的一个元素，并返回之
 * @function  front      获取队列第一个元素
 * @function  end        获取队列最后一个元素
 * @function  isEmpty    判断队列是否为空
 * @function  size       获取队列中元素数量
 * @function  clear      清空队列
 * @function  toString/valueOf 显示队列全部元素
 */
export default class Queue {
  collections = [];

  //
  enqueue(element: unknown, priority?: number) {
    if (priority) {
      if (this.isEmpty()) {
        this.collections.push(element);
      } else {
        const added = false;
        for (let i; i < this.collections.length; i++) {
          if (priority < i) {
            this.collections.splice(i, 0, element);
            break;
          }
        }
        if (!added) {
          this.collections.push(element);
        }
      }
    } else {
      this.collections.push(element);
    }
  }

  //
  dequeue() {
    this.collections.shift();
  }

  //
  front() {
    return this.collections[0];
  }

  //
  end() {
    return this.collections[this.collections.length - 1];
  }

  //
  size() {
    return this.collections.length;
  }

  //
  isEmpty() {
    return Boolean(this.size());
  }

  //
  clear() {
    this.collections = [];
  }

  //
  toString() {
    return this.collections;
  }

  //
  valueOf() {
    return this.toString();
  }
}
