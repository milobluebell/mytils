# countdownFromDuration

> 根据一段时长来计算倒计时

#### 参数

| 参数名       | 参数描述         |     参数类型     | 是否必填 | 默认值                                                                        |
| ------------ | ---------------- | :--------------: | :------: | :---------------------------------------------------------------------------- |
| **duration** | 倒计时时长       |      number      |    √     |                                                                               |
| **format**   | 倒计时展示的格式 | string ｜ object |          | **1h 内**：{m}:{s} 、 **24h 内**： {h}:{m}:{s}、 **72h 内**： {d}:{h}:{m}:{s} |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **string** |

---

#### 代码示例

> 一般使用：

```js
import { countdownFromDuration } from 'mytils';

countdownFromDuration(6124, '{d}天{h}小时{m}分钟{s}秒'); // 00天01小时42分钟04秒
```

#### 附加说明

- 参数 format 为 object 类型时，请参考[countdown 函数的该部分说明](/doc/time/countdown?id=代码示例)
- 时间-索引（{m}、{h}等）对应关系与[countdown](/doc/time/countdown?id=附加说明)函数相同
