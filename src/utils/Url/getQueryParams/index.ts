import { getQueryParam, getAllQueries, TUrlParams } from '../aux';

/**
 *
 * @func     获取url中的查询参数
 * @param    $key*    string | string[]
 * @param    $uri     string
 * @returns           TUrlParams | TUrlParams[]
 * @desc     overload 2 factories
 */
function getQueryParams(): any;
function getQueryParams($key: string, $uri?: URL['href']): TUrlParams;
function getQueryParams<T extends string>(para: T[], $uri?: URL['href']): Record<T, string>;
function getQueryParams($key?: any, $uri?: URL['href']) {
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
}

export default getQueryParams;
