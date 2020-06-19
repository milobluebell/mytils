/**
 * @func 要打包进esm的方法集合
 */
module.exports = {
  // index
  index: 'src/utils',

  // Time
  countdown: 'src/utils/Time/countdown',
  countdownNow: 'src/utils/Time/countdown/fromNow',
  countdownDuration: 'src/utils/Time/countdown/fromDuration',
  formatUnixTime: 'src/utils/Time/formatUnixTime',

  // Calc
  getDataType: 'src/utils/Calc/getDatatype',
  getByteLength: 'src/utils/Calc/getByteLength',

  // Url
  getQueryParams: 'src/utils/Url/getQueryParams',
  getRestParams: 'src/utils/Url/getRestParams',

  // Number
  getRatioFromNum: 'src/utils/Number/getRatioFromNum',
  getNumFromRatio: 'src/utils/Number/getNumFromRatio',

  // Translate
  decodeUTF8: 'src/utils/Translate/decodeUTF8',
  encodeUTF8: 'src/utils/Translate/encodeUTF8',
  evalObject: 'src/utils/Translate/evalObject',

  // Object
  hasProp: 'src/utils/Object/hasProp',
  omitProps: 'src/utils/Object/omitProps',

  // String
  ellipsis: 'src/utils/String/ellipsis',
};
