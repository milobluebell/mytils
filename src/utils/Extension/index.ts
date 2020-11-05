import Queue from './Queue';
import PriorityQueue from './Queue/PriorityQueue';
import LinkedList from './LinkedList';

const extensions = [Queue, PriorityQueue, LinkedList];
const Window = window as any;
const createExtension = () => {
  if (Window) {
    extensions.forEach((extension) => {
      Window[extension.name] = extension;
    });
  }
};
export default createExtension;
