const _default = {
  H: 37,
  TableLength: 137,
};

/**
 * 🍀 HashTable散列表
 *
 * @function  add      增加一对键值
 * @function  put      添加一个元素
 * @function  remove   删除一对键值
 * @function  find     查找一个键对应的值
 * @function  valueOf  返回散列表中的全部元素
 * @function  setOption   重写哈希函数的常量(用于扩容散列表)
 *
 * @remark    默认不开链(可以通过构造函数的opt.buildChain = true来启动开链防碰撞)
 */
export default class HashTable {
  // 散列常量
  H = _default.H;

  TableLength = _default.TableLength;

  buildChain: boolean;

  slots: any[];

  constructor(slots = [], { buildChain = false }) {
    this.slots = slots;
    this.buildChain = buildChain;
    if (buildChain) {
      this.endowChain();
    }
  }

  // 哈希函数
  private hash($factor) {
    let total = 0;
    for (let i = 0; i < $factor.length; i++) {
      total += this.H * total + $factor.charCodeAt(i);
    }
    total %= this.slots.length;
    return parseInt(String(total), 10);
  }

  // 开链
  private endowChain() {
    for (let i = 0; i < this.slots.length; i++) {
      this.slots[i] = [];
    }
  }

  //
  protected setOption(opts: { H?: number; TableLength?: number }) {
    const { H, TableLength } = opts;
    this.H = H || _default.H;
    this.TableLength = TableLength || _default.TableLength;
  }

  //
  add(key, data?: any) {
    const element = data === undefined ? key : data;
    const index = this.hash(key);
    if (this.buildChain) {
      const theSlotArrary = this.slots[index];
      theSlotArrary.push(element);
    } else this.slots[index] = element;
  }

  //
  find(key) {
    const index = this.hash(key);
    if (this.slots[index] === key) {
      return this.slots[index];
    } else if (this.buildChain) {
      return this.slots[index].filter((arraySlotItem) => arraySlotItem === key)[0];
    }
    return this.slots[this.hash(key)];
  }

  //
  remove(key) {
    const index = this.hash(key);
    if (this.slots[index] === key || this.slots[index]?.[0] === key) {
      delete this.slots[index];
      return this.slots;
    } else if (this.buildChain) {
      // 只有开启了buildChain才会在开链上寻找
      for (let i = 0; i < this.slots[index].length; i++) {
        const currentChainArray = this.slots[index];
        if (currentChainArray?.[i] === key) {
          currentChainArray.splice(i, 1);
          break;
        }
      }
      return this.slots;
    } else return undefined;
  }

  //
  valueOf() {
    return this.slots;
  }
}
