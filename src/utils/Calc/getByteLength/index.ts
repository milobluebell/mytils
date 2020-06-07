import getJsEnv from '../getJsEnv';

export enum Errors {
  notStringType = 'input should be a string',
}
/**
 *
 * getByteLength($string) - 🍀 计算字节长度
 *
 * @param   $string   待推断字符串
 */
const getByteLength = ($string: string): number => {
  if (typeof $string === 'string') {
    if ($string.split('').every((item) => item.charCodeAt(0) <= 255)) {
      return $string.length;
    } else {
      if (getJsEnv() === 'node') {
        return Buffer.from($string).length;
      }
      return new Blob([$string]).size;
    }
  } else {
    throw new Error(Errors.notStringType);
  }
};
export default getByteLength;
