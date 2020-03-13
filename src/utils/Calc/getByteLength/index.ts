import getJsEnv from './../getJsEnv';
import Regs from 'src/utils/Regs/regs';

/**
 * 
 * @func 计算字符串的字节长度
 * @param $string  string
 * @return         number
 */
const getByteLength = ($string: string) => {
  if (typeof $string === 'string') {
    if (/^[a-zA-Z0-9]*$/g.test($string)) {
      return $string.length;
    } else {
      if (getJsEnv() === 'node') {
        return new Buffer($string).length;
      } else {
        return new Blob([$string]).size;
      }
    }
  } else throw new Error(`input should be a string`);
}
export default getByteLength;