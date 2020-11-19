import Queue from './Queue';
import PriorityQueue from './Queue/PriorityQueue';
import LinkedList from './LinkedList';
import Collection from './Collection';
import HashTable from './HashTable';
import Stack from './Stack';

const extensions = [Queue, PriorityQueue, LinkedList, Collection, HashTable, Stack];
const createExtension = () => {
  if (window) {
    extensions.forEach((extension) => {
      window[extension.name] = extension;
    });
  }
};
export default createExtension;
