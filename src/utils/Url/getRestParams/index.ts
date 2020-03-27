import { getQueryParam } from '../aux';

/**
 *
 * @func     获取rest风格路由中rest和query参数
 * @param    $matcher*    string | string[]
 * @param    $uri     string
 * @returns           string | object | null
 */
const getRestParams = ($matcher: string, $uri?: string) => {
  const url = $uri || (window?.location ? window.location.href : '');
  if (!url) {
    throw new Error('uri param is invalid or deficient');
  }
  if (!/({[a-zA-Z_$]+})+/.test($matcher) || typeof $matcher !== 'string') {
    // 必须有{}分解符号，且之间必须有内容
    throw new Error('invalid params matcher');
  }
  const windowLocationSearch = url.substr(url.indexOf('?'));
  // 获取所有的query param

  // if (typeof $matcher === 'string') {
  //   return getQueryParam($matcher, windowLocationSearch);
  // } else {
  //   let result = {};
  //   // $matcher.forEach((item) => {
  //   //   result[item] = getQueryParam(item, windowLocationSearch);
  //   // });
  //   return result;
  // }
};

export default getRestParams;
