/**
 * @func 要打包进esm的方法集合
 */
module.exports = {
  // index
  index: 'src/utils',

  // Time
  countdown: 'src/utils/Time/countdown',
  countdownFromNow: 'src/utils/Time/countdown/fromNow',
  countdownFromDuration: 'src/utils/Time/countdown/fromDuration',
  formatUnixTime: 'src/utils/Time/formatUnixTime',

  // Calc
  getDataType: 'src/utils/Calc/getDatatype',
  getByteLength: 'src/utils/Calc/getByteLength',

  // Url
  getParamsFromUrl: 'src/utils/Url/getParamsFromUrl',

  // Number
  getRatioFromNum: 'src/utils/Number/getRatioFromNum',
  getNumFromRatio: 'src/utils/Number/getNumFromRatio',
};
