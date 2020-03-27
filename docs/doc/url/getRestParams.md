# getRestParams

> 从浏览器的 url 或特定 url 中获取匹配参数和?后的查询参数。

---

#### 参数

| 参数名      | 参数描述       | 参数类型 | 是否必填 | 默认值 |
| ----------- | -------------- | :------: | :------: | :----: |
| **matcher** | 参数名称       |  string  |    √     |        |
| url         | 指定的一个 url |  string  |          |        |

#### 返回值

| 输入类型 |   返回值   |
| :------: | :--------: |
| any case | **object** |

---

#### 代码示例

> 一般使用：

使用`{xx}`的方式对 kv 进行索取抓取，比如 👇:

```js
import { getRestParams } from 'mytils';

// 假设调用页面的浏览器的url是：https://www.test.com/company/macrohard/order/detail/c##
getRestParams(`https://www.test.com/company/{company}/order/detail/{product}`); // {company: 'macrohard', product: 'c##'}
getRestParams(`https://www.test.com/company/{key1}/order/detail/{key2}`); // {key1: 'macrohard', key2: 'c##'}
```

> 携带的 query 参数，也会自动获取到：

```js
import { getRestParam } from 'mytils';

// 假设调用页面的浏览器的url是：https://www.test.com/company/macrohard/order/detail/c##?version=3
getRestParams(`https://www.test.com/company/{company}/order/detail/{part}`); // {company: 'macrohard', part: 'c##', version: '3'}

// 需要注意，此处是string类型的'3'，而不是number 3
```

!> 建议严格使用能够完全对应 url 进行匹配的 matcher 参数，因为我们暂时只支持这样的使用。请避免未知的不必要麻烦。

```js
// 假设调用页面的浏览器的url是：https://www.test.com/company/macrohard/order/detail/c##
// ✅
getRestParams(`https://www.test.com/company/{company}/order/detail/{product}`); // {company: 'macrohard', product: 'c##'}

// ❌
getRestParams(`company/{company}/order/{product}/detail`); // {company: 'macrohard', product: 'c##'}
```
