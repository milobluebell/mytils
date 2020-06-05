//
function encodeUTF8($string) {
  return $string.replace(/[^\u0000-\u00FF]/g, function($0) {
    return escape($0).replace(/(%u)(\w{4})/gi, '&#x$2;');
  });
}

//
function decodeUTF8($string) {
  return unescape(
    $string
      .replace(/&#x/g, '%u')
      .replace(/\\u/g, '%u')
      .replace(/;/g, ''),
  );
}

export default {
  encodeUTF8,
  decodeUTF8,
};
