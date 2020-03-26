import { getParam } from '../aux';

/**
 *
 * @func     获取url中携带的参数
 * @param    $key*    string | string[]
 * @param    $url     string
 * @returns           string | object | null
 */
const getQueryParams = ($key: string | string[], $url?: string) => {
  const url = $url || (window?.location ? window.location.href : '');
  if (!url) {
    throw new Error('uri param is invalid or deficient');
  } else {
    const windowLocationSearch = url.substr(url.indexOf('?'));
    if (typeof $key === 'string') {
      return getParam($key, windowLocationSearch);
    } else {
      let result = {};
      $key.forEach((item) => {
        result[item] = getParam(item, windowLocationSearch);
      });
      return result;
    }
  }
};

export default getQueryParams;
