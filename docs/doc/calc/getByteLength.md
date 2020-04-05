# getByteLength

> 计算字符串的字节长度

---

#### 参数

| 参数名     | 参数描述       | 参数类型 | 是否必填 | 默认值 |
| ---------- | -------------- | :------: | :------: | :----- |
| **string** | 被计算的字符串 |  string  |    √     |        |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **number** |

---

#### 代码示例

> 一般使用：

```js
import { getByteLength } from 'mytils';

const $string = String.fromCharCode(270);
const $string2 = String.fromCharCode(65);
const $string3 = '麻麻，我想吃烤山药';

getByteLength($string); // 2
getByteLength($string2); // 1
getByteLength($string3); // 27, 因为是utf8编码
```
