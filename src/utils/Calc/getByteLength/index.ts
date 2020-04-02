import getJsEnv from '../getJsEnv';

/**
 *
 * @func 计算字符串的字节长度
 * @param $string  string
 * @return         number
 */
const getByteLength = ($string: string) => {
  if (typeof $string === 'string') {
    if ($string.split('').every((item) => item.charCodeAt(0) <= 255)) {
      return $string.length;
    } else {
      if (getJsEnv() === 'node') {
        return new Buffer($string).length;
      }
      return new Blob([$string]).size;
    }
  } else {
    throw new Error(`input should be a string`);
  }
};
export default getByteLength;
