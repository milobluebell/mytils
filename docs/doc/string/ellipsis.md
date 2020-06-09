# ellipsis

> 超长字符串以省略号展示。

---

#### 参数

| 参数名        | 参数描述         | 参数类型 | 是否必填 | 默认值    |
| ------------- | ---------------- | :------: | :------: | :-------- |
| **string**    | 待处理字符串     |  string  |    √     |           |
| **maxLength** | 最大长度         |  number  |    √     |           |
| **encodable** | 是否区分编码长度 | boolean  |          | undefined |

#### 返回值

| 输入类型 |   返回值    |
| :------: | :---------: |
| any case | **boolean** |

---

#### 代码示例

> 一般使用：

```js
import { ellipsis } from 'mytils';

ellipsis('一给我里，giao,giao！', 5, true); // 一给...
ellipsis('一给我里，giao,giao！', 5, false); // 一给我里，g...
```
