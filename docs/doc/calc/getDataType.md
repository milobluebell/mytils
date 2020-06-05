# getDataType

> 计算出准确的值类型（区分 undefined、null、NaN 等）

---

#### 参数

| 参数名     | 参数描述             | 参数类型 | 是否必填 | 默认值 | 可选值   |
| ---------- | -------------------- | :------: | :------: | :----- | -------- |
| **param**  | 要被计算的 js 值对象 |   any    |    √     |        |          |
| **locale** | 输出答案的语言类型   |  string  |          | en     | en ｜ zh |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **string** |

---

#### 代码示例

> 一般使用：

```js
import { getDataType } from 'mytils';

getDataType('麻麻，我想吃烤山药'); // string
getDataType('麻麻，我想吃烤山药', 'zh'); // 字符串

getDataType(1234); // number
getDataType(1234, 'zh'); // 数字

getDataType(NaN); // NaN
getDataType(NaN, 'zh'); // NaN

getDataType(undefined); // undefined
getDataType(undefined, 'zh'); // undefined

getDataType(null); // null
getDataType(null, 'zh'); // null
```
