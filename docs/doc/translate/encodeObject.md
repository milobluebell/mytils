# evelObject

> 将字符串解析为 javascript 对象

---

#### 参数

| 参数名     | 参数描述       | 参数类型 | 是否必填 | 默认值 |
| ---------- | -------------- | :------: | :------: | :----: |
| **string** | 要解析的字符串 |  string  |    √     |        |

#### 返回值

|                          输入类型                           |            返回值            |
| :---------------------------------------------------------: | :--------------------------: |
|               字符串仅由数字构成，比如`1289`                |          **number**          |
|             字符串为`NaN`或`undefined`或`null`              | `NaN`或**undefined**或`null` |
|                   字符串为`true`或`false`                   |       `true`或`false`        |
| 字符串为 json 格式时，比如`{"a":1, "b":2}`或`[1, 2, false]` |   **object** 或 **array**    |
|                           others                            |          **string**          |

---

#### 代码示例

> 一般使用：

```js
import { evelObject } from 'mytils';

evelObject('1234'); // 数字1234
evelObject('te1234st'); // 'te1234st'
evelObject('true'); // 布尔true
evelObject('{"a":1,"b":2,"c":{"d":3}}'); // 对象{a: 1,b: 2,c: {d: 3}}
evelObject('[1,`2`,false]'); // 数组对象[1, "2", false]
```
