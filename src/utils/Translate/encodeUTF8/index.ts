/**
 * 
 * @param $string 
 */
const encodeUTF8 = ($string: string) => $string.replace(/[^\u0000-\u00FF]/g, function ($0) { return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;") });
export default encodeUTF8;