import getDataType from './../../utils/Calc/getDatatype';

// 根据类location.search获取param参数
export const getParam = ($key: string, $search: string) => {
  let matches = $search.slice(1).match(new RegExp('(^|&)' + $key + '=([^&]*)(&|$)', 'i'));
  if (matches && getDataType(matches) === 'array') {
    return matches[2];
  } else return null;
};
