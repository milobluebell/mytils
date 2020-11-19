import Queue from '..';

export default class PriorityQueue extends Queue {
  enqueue(args: [unknown, number]) {
    const [_, priority] = args;
    if (priority) {
      if (this.isEmpty()) {
        this.collections.push(args);
      } else {
        const added = false;
        for (let i; i < this.collections.length; i++) {
          if (priority < i) {
            this.collections.splice(i, 0, args);
            break;
          }
        }
        if (!added) {
          this.collections.push(args);
        }
      }
    } else {
      this.collections.push(args);
    }
  }
}
