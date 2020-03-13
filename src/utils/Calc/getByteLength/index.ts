import getJsEnv from './../getJsEnv';

/**
 * 
 * @func 计算字符串的字节长度
 * @param $string 
 */
const getByteLength = ($string: string) => {
  if (getJsEnv() === 'node') {
    return new Buffer($string).length
  } else {
    return new Blob([$string]).size
  }
}
export default getByteLength;