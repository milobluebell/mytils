# getRatioFromNum

> 将一个数字转换成对应的百分比数值。

---

#### 参数

| 参数名       | 参数描述                     | 参数类型 | 是否必填 | 默认值 |
| ------------ | ---------------------------- | :------: | :------: | :----: |
| **number**   | 被计算的数字                 |  number  |    √     |        |
| precision    | 精确度（相对于小数点的位数） |  number  |          |        |
| supplemental | 是否添加补位 0               | boolean  |          | false  |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **string** |

---

#### 代码示例

> 一般使用：

```js
import { getRatioFromNum } from 'mytils';

const a = 0.24242645;
const b = 0.24;

getRatioFromNum(a); // 24.242645%
getRatioFromNum(a, 2); // 24.24%
getRatioFromNum(a, 3); // 24.243%

getRatioFromNum(b); // 24%
getRatioFromNum(b, 2); // 24%
getRatioFromNum(b, 3, true); // 24.000%
```
