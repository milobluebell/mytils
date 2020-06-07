import Regs from '../../Regs';
import getDataType from '../../Calc/getDatatype';

/**
 *
 * evalObject($string [, $justTestProp]) - 🍀 解析string并转成对应的javascript对象实体，如果无法正确解析则依然为string
 *
 * @param    $string           待处理输入内容
 *
 * @解释      本函数通常用于js解析inputDom输入内容，平时很少用到。
 */
const evalObject = (string: string, $justTestProp: boolean = false): unknown => {
  let $string: string;
  if ($justTestProp) {
    $string = `${string}`;
  } else {
    if (getDataType(string) !== 'string') {
      throw new Error(`input param should be a string but got one ${getDataType(string)}`);
    }
    $string = string;
  }
  const trimedString = $string.replace(/\s*/g, '');
  if (/^[0-9]+(\.)?[0-9]+$/g.test($string)) {
    // number and float
    return parseFloat($string);
  } else if ($string === 'NaN' || $string === 'undefined' || $string === 'null') {
    // NaN or undefined or null
    return $string === 'NaN' ? NaN : $string === 'undefined' ? undefined : null;
  } else if (/^(true|false)$/i.test($string)) {
    // boolean
    return $string === 'true';
  } else if (Regs.objectLike.test(trimedString)) {
    // object or array
    return JSON.parse(trimedString.replace(/'/g, '"'));
  } else return $string;
};
export default evalObject;
