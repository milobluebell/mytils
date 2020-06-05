import getByteLength, { Errors } from '..';
import vendors from './../../../../../tests/vendors';

describe('getByteLength', function () {
  // 编码小于255的字符
  it('input is chars', function () {
    const chars = ' abcd _ xyz ';
    expect(getByteLength(chars)).toBe(12);
  });

  // 科学计数法数字
  it('input is numeric in scientific notation', function () {
    const num = (100e5).toString();
    expect(getByteLength(num)).toBe(8);
  });

  // 非科学计数法数字
  it('input is not scientific notational numeric char', function () {
    const num = '2046';
    expect(getByteLength(num)).toBe(4);
  });

  // utf8中文
  it('input is zh-cn char in UTF8', function () {
    const utf8Origin = '&#x9EBB;&#x9EBB;&#xFF0C;&#x6211;&#x60F3;&#x5403;&#x70E4;&#x5C71;&#x836F;';
    const urf8char = vendors.decodeUTF8(utf8Origin);
    expect(getByteLength(urf8char)).toBe(27);
  });

  // 当输入类型不是string时，给予正确报错提示
  if ('throw error correctly when params $string is not in string type') {
    const notStringParam = { test: { test: 'test' }, test2: [1, 2] };
    // @ts-ignore
    expect(() => getByteLength(notStringParam)).toThrow(Errors.notStringType);


  }

});
