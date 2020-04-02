import { getQueryParam, getAllQueries } from '../aux';

/**
 *
 * @func     获取url中的查询参数
 * @param    $key*    string | string[]
 * @param    $uri     string
 * @returns           string | object | null
 */
const getQueryParams = ($key?: string | string[], $uri?: string) => {
  const url = $uri || (window?.location ? window.location.href : '');
  if (!url) {
    throw new Error('uri param is invalid or deficient');
  } else {
    if (url.indexOf('?') < 0) {
      return {};
    }
    const windowLocationSearch = url.substr(url.indexOf('?'));
    if (typeof $key === 'string') {
      return getQueryParam($key, windowLocationSearch);
    } else if (typeof $key === 'undefined') {
      // 如果不传入$key则输出全部查询参数
      return getAllQueries(windowLocationSearch);
    } else {
      const result = {};
      $key.forEach((item) => {
        result[item] = getQueryParam(item, windowLocationSearch);
      });
      return result;
    }
  }
};

export default getQueryParams;
