import getDataType from '../../utils/Calc/getDatatype';

// 根据类location.search获取指定的query param
export const getQueryParam = ($key: string, $search: string) => {
  const matches = $search.slice(1).match(new RegExp(`(^|&)${$key}=([^&]*)(&|$)`, 'i'));
  if (matches && getDataType(matches) === 'array') {
    return matches[2];
  } else {
    const divided = $search?.split('?')[1]?.split('&');
    return divided?.some((item) => {
      return item.split('=')[0] === $key;
    })
      ? true
      : null;
  }
};

// 根据类location.search获取全部query param
export const getAllQueries = ($search: string) => {
  const divided = $search?.split('?')[1]?.split('&');
  return divided?.reduce((prev: any, curr: any) => {
    const [key, value] = curr.split('=');
    const obj = { [key]: value || '' };
    return Object.assign(prev, obj);
  }, {});
};
