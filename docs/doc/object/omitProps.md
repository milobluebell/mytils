# omitProps

> 清洗对象的指定属性，并返回一个新的对象。

---

#### 参数

| 参数名        | 参数描述                         |      参数类型      | 是否必填 | 默认值 |
| ------------- | -------------------------------- | :----------------: | :------: | :----- |
| **key**       | 待清洗的属性的 key 或 key 的数组 | string ｜ string[] |    √     |        |
| **targetObj** | 被清洗对象                       |       object       |    √     |        |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **object** |

---

#### 代码示例

> 一般使用：

```js
import { omitProps } from 'mytils';

const targetObj = {
  testKey: 'testValue',
  testKey2: 'testValue2',
  testKey3: 'testValue3',
  testKey4: 'testValue4',
};
targetObj.prototype['testKey5'] = 'testValue5';

omitProps(['testKey', 'testKey2'], targetObj);
/*
  { testKey3: 'testValue3',
    testKey4: 'testValue4' }
  */

omitProps('testKey', targetObj);
/*
  { 
    testKey2: 'testValue2',
    testKey3: 'testValue3',
    testKey4: 'testValue4' }
  */

omitProps('testKey5', targetObj); // 返回原对象
```

#### 附加说明

!> 不能清洗对象原型链上的属性
