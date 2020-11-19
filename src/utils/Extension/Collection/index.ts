type suporttedTypes = any;

/**
 * 🍀 Collection集合
 *
 * @function values   返回集合中的所有元素
 * @function size     返回集合中元素的个数
 * @function has      判断集合中是否存在某个元素
 * @function add      向集合中添加元素，并返回执行情况
 * @function remove   从集合中移除某个元素，并返回执行情况
 * @function union    返回两个集合的并集
 * @function intersection 返回两个集合的交集
 * @function difference   返回两个集合的差集
 * @function isSubset 判断一个集合是否为另一个集合的子集
 *
 * @remark 集合中不能有重复的元素
 */
export default class Collection {
  collections;

  constructor(collections: suporttedTypes[] = []) {
    this.collections = Array.from(new Set(collections));
  }

  //
  values() {
    return this.collections;
  }

  //
  size() {
    return this.collections.length;
  }

  //
  has(element: suporttedTypes) {
    return this.collections.some((collection) => element === collection);
  }

  //
  add(element: suporttedTypes) {
    if (!this.has(element)) {
      this.collections.push(element);
      return true;
    } else return false;
  }

  //
  remove(element) {
    if (!this.has(element)) {
      return false;
    } else {
      let removed = false;
      for (let i = 0; i < this.collections.length; i++) {
        const collection = this.collections[i];
        if (collection === element) {
          this.collections.splice(i, 1);
          removed = true;
          break;
        }
      }
      return removed;
    }
  }

  //
  union(anotherCollection: Collection) {
    return new Collection([...this.values(), ...anotherCollection.values()]);
  }

  //
  static union(leftCol: Collection, rightCol: Collection) {
    return new Collection([...leftCol.values(), ...rightCol.values()]);
  }

  //
  intersection(anotherCollection: Collection) {
    const resultCollection = new Collection();
    this.values().forEach((value) => {
      if (anotherCollection.has(value)) {
        resultCollection.add(value);
      }
    });
    return resultCollection;
  }

  //
  static intersection(leftCol: Collection, rightCol: Collection) {
    const resultCollection = new Collection();
    const leftColValues = leftCol.values();
    leftColValues.forEach((value) => {
      if (rightCol.has(value)) {
        resultCollection.add(value);
      }
    });
    return resultCollection;
  }

  //
  diffs(anotherCollection: Collection) {
    const resultCollection = new Collection();
    this.values().forEach((value) => {
      if (!anotherCollection.has(value)) {
        resultCollection.add(value);
      }
    });
    return resultCollection;
  }

  static diffs(leftCol: Collection, rightCol: Collection) {
    const resultCollection = new Collection();
    const leftColValues = leftCol.values();
    leftColValues.forEach((value) => {
      if (!rightCol.has(value)) {
        resultCollection.add(value);
      }
    });
    return resultCollection;
  }

  //
  static isSubset(subSet: Collection, superSet: Collection) {
    return subSet.values().every((value) => superSet.has(value));
  }
}
