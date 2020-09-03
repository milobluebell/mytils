# purgeData

> 根据断言或断言数组，过滤对象或数组，返回一个过滤后的数据。

---

#### 参数

| 参数名         | 参数描述                         |                            参数类型                            | 是否必填 | 默认值 |
| -------------- | -------------------------------- | :------------------------------------------------------------: | :------: | :----- |
| **obj**        | 被过滤对象                       | string ｜ number ｜ boolean ｜ (string ｜ number ｜ boolean)[] |    √     |        |
| **predicates** | 待过滤的属性的 key 或 key 的数组 |                             array                              |          |        |

#### 返回值

| 输入类型 |       返回值        |
| :------: | :-----------------: |
| any case | **object or array** |

---

#### 代码示例

> 一般使用：

```js
import { purgeData } from 'mytils';

const objTester = { a: 1, b: 2, c: undefined, d: null, e: false, f: true, g: '' };
const arrayTester = [undefined, null, 1, 2, false, 3, true, '', '123'];

omitProps(objTester);
/**
 * 返回值：{ a: 1, b: 2, e: false, f: true, g: '' }
 **/

omitProps(objTester, ['', false]);
/**
 * 返回值：{ a: 1, b: 2, c: undefined, d: null, f: true }
 **/

omitProps(arrayTester);
/**
 * 返回值：[1, 2, false, 3, true, '', '123']
 **/

omitProps(arrayTester, ['', false]);
/**
 * 返回值：[undefined, null, 1, 2, 3, true, '123']
 **/
```

#### 附加说明

!> 不能过滤掉对象原型链上的属性。
