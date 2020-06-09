import getByteLength from 'src/utils/Calc/getByteLength';
import getDataType from 'src/utils/Calc/getDatatype';

/**
 *
 * ellipsis($string, $maxLength [, $encodable]) - 🍀 超长字符串以省略号展示
 *
 * @param   $string      待处理字符串
 * @param   $length      最大长度
 * @param   $encodable   是否区分编码长度
 *
 * @解释     $encodable   如果区分编码，则1个中文不是1个字节长度。比如：ellipsis('全世界都说中国话', 5)为'全世界都说...'；而ellipsis('全世界都说中国话', 5)为'全...'
 */
const ellipsis = ($string: string, $maxLength: number, $encodable?: boolean): string => {
  if (!$string || getDataType($string) !== 'string') {
    throw new Error(`invalid first param: $string`);
  }
  if (!$maxLength) {
    throw new Error(`invalid second param: $maxLength`);
  }
  let splittedLength = 0;
  const result = $string.split('').reduce((prev, curr) => {
    splittedLength += $encodable ? getByteLength(curr) : 1;
    return splittedLength <= $maxLength ? prev + curr : `${prev}`;
  }, '');
  const resultSize = $encodable ? getByteLength(result) : result.length;
  const stringSize = $encodable ? getByteLength($string) : $string.length;
  return resultSize >= stringSize ? result : `${result}...`;
};
export default ellipsis;
