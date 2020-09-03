# hasProp

> 判断对象是否存在某一属性。

---

#### 参数

| 参数名        | 参数描述         | 参数类型 | 是否必填 | 默认值 |
| ------------- | ---------------- | :------: | :------: | :----- |
| **key**       | 待推断属性的 key |  string  |    √     |        |
| **targetObj** | 被推断对象       |  object  |    √     |        |

#### 返回值

| 输入类型 |   返回值    |
| :------: | :---------: |
| any case | **boolean** |

---

#### 代码示例

> 一般使用：

```js
import { hasProp } from 'mytils';

const targetObj = {
  testKey: 'testValue',
  testKey2: 'testValue2',
};
targetObj.prototype['testKey3'] = 'testValue3';

hasProp('testKey', targetObj); // true
hasProp('testKeyUnexisted', targetObj); // false
hasProp('testKey3', targetObj); // false，因为是原型链上的
```

#### 附加说明

!> 不能判断对象原型链上的属性
