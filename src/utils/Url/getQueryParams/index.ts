import getJsEnv from 'src/utils/Calc/getJsEnv';
import { getQueryParam, getAllQueries, TUrlParams } from '../aux';

/**
 *
 * getQueryParams($key [, $uri]) - 🍀 获取url中的查询参数
 *
 * @param    $key    待查询参数的key
 * @param    $uri    指定的url地址(default: 当前window.location.href)
 */
function getQueryParams(): any;
function getQueryParams($key: string, $uri?: URL['href']): TUrlParams;
function getQueryParams<T extends string>(para: T[], $uri?: URL['href']): Record<T, string>;
function getQueryParams($key?: any, $uri?: URL['href']) {
  if (getJsEnv() === 'node') {
    throw new Error('this function can only be used in browser environment');
  }
  const url = $uri || (window?.location ? window.location.href : '');
  if (!url) {
    throw new Error('uri param is invalid or deficient');
  } else {
    if (url.indexOf('?') < 0) {
      return null;
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
