# countdownFromNow

> 根据一个 unix 时间计算从现在到该 unix 时间的倒计时。

---

#### 参数

| 参数名     | 参数描述         |     参数类型     | 是否必填 | 默认值                                                                        |
| ---------- | ---------------- | :--------------: | :------: | :---------------------------------------------------------------------------- |
| **endAt**  | unix 结束时间    |      number      |    √     |                                                                               |
| format | 倒计时展示的格式 | string ｜ object |          | **1h 内**：{m}:{s} 、 **24h 内**： {h}:{m}:{s}、 **72h 内**： {d}:{h}:{m}:{s} |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **string** |

---

#### 代码示例

> 一般使用：

```js
import { countdownFromNow } from 'mytils';

countdownFromNow(2398348800, '{y}年{m}月{d}天'); // 25年09月22天
```

#### 附加说明

- 参数 format 为 object 类型时，请参考[countdown 函数的该部分说明](/doc/time/countdown?id=代码示例)
- 时间-解析（{m}、{h}等）对应关系与[countdown](/doc/time/countdown?id=附加说明)函数相同
