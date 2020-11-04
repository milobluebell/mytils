import Queue from '..';

/**
 * @name 优先队
 */
export default class PriorityQueue extends Queue {
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
}
