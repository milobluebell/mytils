# getQueryParams

> 从浏览器的 url 或特定 url 中获取查询参数。

---

#### 参数

| 参数名  | 参数描述       |    参数类型     | 是否必填 | 默认值 |
| ------- | -------------- | :-------------: | :------: | :----: |
| **key** | 参数名称       | string ｜ array |    √     |        |
| url     | 指定的一个 url |     string      |          |        |

#### 返回值

|       输入类型       |   返回值   |
| :------------------: | :--------: |
|    key 为 string     | **string** |
|     key 为 array     | **object** |
|      key 为 空       | **object** |
| key 存在，但没有赋值 |   `true`   |

---

#### 代码示例

> 一般使用：

```js
import { getQueryParams } from 'mytils';

// 假设调用页面的浏览器的url是：http://localhost:3000/testRoute?test=a&test2=b&test3
getQueryParams('test'); // 'a'
getQueryParams(['test', 'test2']); // { test: 'a', test2: 'b' }
getQueryParams('test3'); // true
```

> 没有任何参数时：

```js
import { getQueryParams } from 'mytils';

// 假设调用页面的浏览器的url是：http://localhost:3000/testRoute?test=a&test2=b&test3=c
const urllikeString = 'http://localhost:3000/testRoute?test=a&test2=b';

getQueryParams(); // {test: 'a', test2: 'b'}
```

> 指定的 url：

```js
import { getQueryParams } from 'mytils';

const urllikeString = 'http://localhost:3000/testRoute?test=a&test2=b';

getQueryParams('test'); // 'a'
getQueryParams(['test', 'test2'], urllikeString); // { test: 'a', test2: 'b' }
```
