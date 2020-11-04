/**
 * @name Queue队列
 * https://image-static.segmentfault.com/878/005/878005392-5d4bf0453cca9_articlex
 *
 * @function  enqueue    入列，向队尾部添加一个元素，返回成功与否。允许根据优先级降序排列。
 * @function  dequeue    出列，移除队列头部的一个元素，并返回之
 * @function  queueUp    获取队列第一个元素
 * @function  queueDown  获取队列嘴鸥一个元素
 * @function  isEmpty    判断队列是否为空
 * @function  size       获取队列中元素数量
 */
export default class Queue {
  collection = [];

  //
  protected enqueue(element: unknown, priority?: number) {
    if (priority) {
      if (this.isEmpty()) {
        this.collection.push(element);
      } else {
        const added: boolean = false;
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
  protected dequeue() {
    this.collection.shift();
  }

  //
  protected front() {
    return this.collection[0];
  }

  //
  protected end() {
    return this.collection[this.collection.length - 1];
  }

  //
  protected size() {
    return this.collection.length;
  }

  //
  protected isEmpty() {
    return Boolean(this.size());
  }

  //
  protected clear() {
    this.collection = [];
  }

  //
  protected toString() {
    return this.collection;
  }
}
