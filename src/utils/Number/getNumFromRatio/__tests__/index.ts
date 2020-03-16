import getNumFromRatio from '../index';

describe('getNumFromRatio', function () {

  // 
  it('normal usage with float-like ratio', function () {
    const ratio = `24.335%`;
    expect(getNumFromRatio(ratio)).toBe(0.24335);
  });

  // 
  it('normal usage with int-like ratio', function () {
    const ratio = `66%`;
    expect(getNumFromRatio(ratio)).toBe(0.66);
  });

  // 正数精确度
  it('used with pricision in a positive number', function () {
    const ratio = `25.45%`; // 0.2545
    expect(getNumFromRatio(ratio, 3)).toBe(0.255);
  });
  
  // 
  it('used with pricision in a negative number and supply zero', function () {
    const ratio = `25.45%`;// 0.2545
    expect(getNumFromRatio(ratio, 6)).toBe(0.254500);
  });

  // 负数精确度
  it('used with pricision in a negative number', function () {
    const ratio = `255555%`; // 2555.55
    expect(getNumFromRatio(ratio, -2)).toBe(2600);
  });

});
