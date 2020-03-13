# getNumFromRatio

> 将一个百分比数值转换成对应的数字。

---

#### 参数

| 参数名       | 参数描述                     | 参数类型 | 是否必填 | 默认值 |
| ------------ | ---------------------------- | :------: | :------: | :----: |
| **ratio**    | 被计算的百分比数值           |  string  |    √     |        |
| precision    | 精确度（相对于小数点的位数） |  number  |          |        |
| supplemental | 是否添加补位 0               | boolean  |          | false  |

#### 返回值

|         输入类型          |   返回值   |
| :-----------------------: | :--------: |
|  supplemental 为 true 时  | **string** |
| supplemental 不为 true 时 | **number** |

---

#### 代码示例

> 一般使用：

```js
import { getNumFromRatio } from 'mytils';

const a = '24.242645%';
const b = '24%';

getNumFromRatio(a); // 0.24242645, number类型
getNumFromRatio(a, 3); // 0.242, number类型

getNumFromRatio(b, 3); // 0.24, number类型
getNumFromRatio(b, 5, true); // '0.24000', string类型
```
