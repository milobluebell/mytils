/**
 *
 * @$param   $param
 * @func    判断参数的数据类型
 * @return  string 值枚举就是types_zh中key的枚举
 */
const typesZh = {
  array: '数组',
  object: '对象',
  number: '数字',
  string: '字符串',
  boolean: '布尔值',
  null: 'null',
  undefined: 'undefined',
  NaN: 'NaN',
  symbol: 'Symbol',
  set: 'Set',
  map: 'Map',
};
const localeRefs = {
  zh: typesZh,
};
type localeOptionTypes = 'en' | 'zh';
const localeOptions = Object.keys(localeRefs);

const getDataType = ($param: Object, $locale?: localeOptionTypes): string => {
  if (!$locale || $locale === 'en' || localeOptions.includes($locale)) {
    const $type = Object.prototype.toString
      .call($param)
      .split('[object ')[1]
      .toLowerCase()
      .replace(/[^a-zA-Z]*/g, '');
    let result = typeof $param === 'number' && Number.isNaN($param) ? 'NaN' : $type;
    result = !$locale || $locale === 'en' ? result : localeRefs[$locale][result];
    return result;
  } else throw new Error(`second $param[$locale] should be one of: ${localeOptions.map((item) => `"${item}"`).join(' or ')}`);
};
export default getDataType;
