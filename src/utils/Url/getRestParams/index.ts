import { getAllQueries } from '../aux';

/**
 *
 * @func     获取rest风格路由中rest和query参数
 * @param    $matcher*   string | string[]
 * @param    $uri        string
 * @returns              string | object | null
 */
const matcherTester = /({[a-zA-Z_$]+})+/;
const getRestParams = ($matcher: string, $uri?: string) => {
  const url = $uri || (window?.location ? window.location.href : '');
  if (!url) {
    throw new Error('uri param is invalid or deficient');
  }
  if (!matcherTester.test($matcher) || typeof $matcher !== 'string') {
    // 必须有{}分解符号，且之间必须有内容
    throw new Error('invalid params matcher');
  }
  const searchPart = url.substr(url.indexOf('?'));
  const urlPart = url.indexOf('?') < 0 ? url : url.substr(0, url.indexOf('?'));
  // 获取所有的query param
  const queries = getAllQueries(searchPart);
  const splittedMatcher = $matcher.split('/');
  const splittedUrl = urlPart.split('/');
  let result = {};
  splittedMatcher.forEach((item, index) => {
    if (item !== splittedUrl[index]) {
      const key = item.replace(/({|})/g, '');
      const value = splittedUrl[index];
      result[key] = value;
    }
  });
  return Object.assign({}, result, queries);
};

export default getRestParams;
