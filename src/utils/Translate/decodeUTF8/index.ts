/**
 * 
 * @param $string 
 */
const decodeUTF8 = ($string: string) => unescape($string.replace(/&#x/g, '%u').replace(/\\u/g, '%u').replace(/;/g, ''));
export default decodeUTF8;