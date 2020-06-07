import { getAllQueries, TUrlParams } from '../aux';

const matcherTester = /({[a-zA-Z_$]+})+/;
/**
 *
 * getRestParams($matcher [, $uri]) - 🍀 获取rest风格url中的路径和query参数
 *
 * @param    $matcher   匹配参数的模式
 * @param    $uri       待匹配的url
 *
 * @解释      建议严格使用能够完全对应 url 进行匹配的 matcher 参数，因为我们暂时只支持这样的使用。请避免未知的不必要麻烦。比如：${host}/company/macrohard/market/order/C##
 */
const getRestParams = ($matcher: URL['href'], $uri?: URL['href']): TUrlParams | any => {
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
  const result = {};
  splittedMatcher.forEach((item, index) => {
    if (item !== splittedUrl[index]) {
      const key = item.replace(/({|})/g, '');
      const value = splittedUrl[index];
      result[key] = value;
    }
  });
  return { ...result, ...queries };
};

export default getRestParams;
