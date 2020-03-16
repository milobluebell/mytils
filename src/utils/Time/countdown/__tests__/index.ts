import countdown from '../index';

describe('getRatioFromNum', function () {

  it('normal usage', function () {
    const startUnix = 1583825398;
    const endUnix = 1583825798;
    expect(countdown(startUnix, endUnix)).toBe(`60.425%`);
  });

  // with customed format
  it('used in customed format', function () {
    const startUnix = 1583825398;
    const endUnix = 1583825798;
    expect(countdown(startUnix, endUnix, `{y}年{M}月{d}日{w}周,{h}小时{m}分钟{s}秒`)).toBe();
  });

  // with customed format supplied zero
  it('used in customed format', function () {
    const startUnix = 1583825398;
    const endUnix = 1583825798;
    expect(countdown(startUnix, endUnix, `{yy}年{MM}月{dd}日{w}周,{hh}小时{mm}分钟{ss}秒`)).toBe(`60.425%`);
  });

});
