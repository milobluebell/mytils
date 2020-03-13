
/**
 * 
 * @param   param
 * @func    判断参数的数据类型
 * @return  string 值枚举就是types_zh中key的枚举
 */
const types_zh = {
  'array': '数组',
  'object': '对象',
  'number': '数字',
  'string': '字符串',
  'boolean': '布尔值',
  'symbol': 'Symbol',
  'null': 'null',
  'NaN': 'NaN',
  'set': 'set',
  'map': 'map',
}
const localeRefs = {
  'zh': types_zh
}
type localeOptionTypes = 'en' | 'zh';
const localeOptions = ['en', 'zh'];
const getDataType = (param: any, locale?: localeOptionTypes) => {
  if (!locale || localeOptions.includes(locale)) {
    const _type = Object.prototype.toString.call(param).split('[object ')[1].toLowerCase().replace(/[^a-zA-Z]*/g, '');
    let result = (_type === 'number' && isNaN(param)) ? 'NaN' : _type;
    result = (!locale || locale === 'en') ? _type : localeRefs[locale][_type];
    return result;
  } else throw new Error(`second param[locale] should be one of: ${localeOptions.map(item => `"${item}"`).join(' or ')}`);
}
export default getDataType;