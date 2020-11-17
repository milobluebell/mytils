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
  collection = [];

  //
  enqueue(element: unknown, priority?: number) {
    if (priority) {
      if (this.isEmpty()) {
        this.collection.push(element);
      } else {
        const added = false;
        for (let i; i < this.collection.length; i++) {
          if (priority < i) {
            this.collection.splice(i, 0, element);
            break;
          }
        }
        if (!added) {
          this.collection.push(element);
        }
      }
    } else {
      this.collection.push(element);
    }
  }

  //
  dequeue() {
    this.collection.shift();
  }

  //
  front() {
    return this.collection[0];
  }

  //
  end() {
    return this.collection[this.collection.length - 1];
  }

  //
  size() {
    return this.collection.length;
  }

  //
  isEmpty() {
    return Boolean(this.size());
  }

  //
  clear() {
    this.collection = [];
  }

  //
  toString() {
    return this.collection;
  }

  //
  valueOf() {
    return this.toString();
  }
}
