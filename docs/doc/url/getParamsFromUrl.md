# getParamsFromUrl

> 从浏览器的 url 或特定 url 中获取查询参数。

---

#### 参数

| 参数名  | 参数描述       |    参数类型     | 是否必填 | 默认值 |
| ------- | -------------- | :-------------: | :------: | :----: |
| **key** | 被计算的字符串 | string ｜ array |    √     |        |
| url     | 指定的一个 url |     string      |          |        |

#### 返回值

|   输入类型    |   返回值   |
| :-----------: | :--------: |
| key 为 string | **string** |
| key 为 array  | **object** |

---

#### 代码示例

> 一般使用：

```js
import { getParamsFromUrl } from 'mytils';

// 假设调用页面的浏览器的url是：http://localhost:3000/testRoute?test=a&test2=b
getParamsFromUrl('test'); // 'a'
getParamsFromUrl(['test', 'test2']); // { test: 'a', test2: 'b' }
```

> 指定的 url：

```js
import { getParamsFromUrl } from 'mytils';

const urllikeString = 'http://localhost:3000/testRoute?test=a&test2=b';

getParamsFromUrl('test'); // 'a'
getParamsFromUrl(['test', 'test2'], urllikeString); // { test: 'a', test2: 'b' }
```
