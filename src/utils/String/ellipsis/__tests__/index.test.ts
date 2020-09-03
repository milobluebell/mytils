import ellipsis from '..';

describe('ellipsis', function() {
  // 不区分编码
  it(`indistinct encoding`, () => {
    const theString = '一给我里，giao,giao！';
    expect(ellipsis(theString, 8)).toBe('一给我里，gia...');
  });

  // 区分编码
  it(`distinguish encoding`, () => {
    const theString = '一给我里，giao,giao！';
    expect(ellipsis(theString, 8, true)).toBe('一给...');
  });

  // $string参数为空
  it(`lack of $string`, () => {
    expect(() => ellipsis(undefined, 8, true)).toThrow('invalid first param: $string');
  });

  // $string不为字符串
  it(`first param $string is not string type`, () => {
    // @ts-ignore
    expect(() => ellipsis([1, 2, 3], 8, true)).toThrow('invalid first param: $string');
  });

  // $maxLength为空
  it(`lack of $maxLength`, () => {
    const theString = '一给我里，giao,giao！';
    expect(() => ellipsis(theString, undefined, true)).toThrow('invalid second param: $maxLength');
  });

  // 要截取的长度比待截取的还要长时，显示正确且没有省略号
  it(`run correctly when $maxLength is larger than $string's size`, () => {
    const theString = '一给我里，giao,giao！';
    expect(ellipsis(theString, 30)).toBe('一给我里，giao,giao！');
  });
});
