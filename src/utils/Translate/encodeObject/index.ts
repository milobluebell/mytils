import Regs from '../../Regs';

/**
 *
 * @func 根据input标签输入的内容，自动转换成javascript对应的数据类型。否则会被默认为string。
 * @param    string    接受一个string入参，一般来自<input/>
 * @returns  unknown   视输入情况（具体参见文档：）
 * // TODO：补充文档和url
 */
const encodeObject = (string: string, $justTestProp = false as boolean) => {
  let $string: string;
  if ($justTestProp) {
    $string = `${string}`;
  } else {
    if (typeof string !== 'string') {
      throw new Error(`input param should be a string but got one ${typeof $string}`);
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
export default encodeObject;
