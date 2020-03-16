import getRatioFromNum from '../index';

describe('getRatioFromNum', function () {

  // 
  it('normal usage', function () {
    const num = 0.60425;
    expect(getRatioFromNum(num)).toBe(`60.425%`);
  });

  // 
  it('normal usage 2', function () {
    const num = 0.60000;
    expect(getRatioFromNum(num)).toBe(`60%`);
  });

  // 正数精确度不补位
  it('used with pricision in a positive number', function () {
    const ratio = 0.60000;
    expect(getRatioFromNum(ratio, 2)).toBe(`60%`);
  });

  // 正数精确度补位
  it('used with pricision in a positive number', function () {
    const ratio = 0.60000;
    expect(getRatioFromNum(ratio, 2, true)).toBe(`60.00%`);
  });

  // 负数精确度
  it('used with pricision in a negative number', function () {
    const ratio = 12.345678; // 1234.5678%
    expect(getRatioFromNum(ratio, -1)).toBe(`1230%`);
  });

  // 精确度为0
  it('used with zero pricision', function () {
    const ratio = 12.345678; // 1234.5678%
    expect(getRatioFromNum(ratio, 0)).toBe(`1235%`);
  });

});
