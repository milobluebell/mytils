/**
 *
 * decodeUTF8($utfCode) - 🍀UTF8字符转字符串
 *
 * @param $utfCode 待转utf8字符
 */
const decodeUTF8 = ($utfCode: string) =>
  unescape(
    $utfCode
      .replace(/&#x/g, '%u')
      .replace(/\\u/g, '%u')
      .replace(/;/g, ''),
  );
export default decodeUTF8;
