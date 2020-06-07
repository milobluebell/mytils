/**
 *
 * decodeUTF8($utfCode) - 🍀 字符串转UTF8字符
 *
 * @param $string 待转字符串
 */
const encodeUTF8 = ($string: string) =>
  $string.replace(/[^\u0000-\u00FF]/g, function($0) {
    return escape($0).replace(/(%u)(\w{4})/gi, '&#x$2;');
  });
export default encodeUTF8;
