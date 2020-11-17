import Queue from '..';

export default class PriorityQueue extends Queue {
  protected enqueue(args: [unknown, number]) {
    const [_, priority] = args;
    if (priority) {
      if (this.isEmpty()) {
        this.collection.push(args);
      } else {
        const added = false;
        for (let i; i < this.collection.length; i++) {
          if (priority < i) {
            this.collection.splice(i, 0, args);
            break;
          }
        }
        if (!added) {
          this.collection.push(args);
        }
      }
    } else {
      this.collection.push(args);
    }
  }
}
