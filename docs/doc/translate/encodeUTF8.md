# encodeUTF8

> 字符串转 utf8 编码

---

#### 参数

| 参数名     | 参数描述       | 参数类型 | 是否必填 | 默认值 |
| ---------- | -------------- | :------: | :------: | :----: |
| **string** | 要编码的字符串 |  string  |    √     |        |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **string** |

---

#### 代码示例

> 一般使用：

```js
import { encodeUTF8 } from 'mytils';

decodeUTF8('一给我里，giao,giao！'); // &#x4E00;&#x7ED9;&#x6211;&#x91CC;&#xFF0C;giao,giao&#xFF01;
```
