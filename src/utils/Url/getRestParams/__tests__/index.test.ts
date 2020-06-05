import getRestParams from '../index';

describe('getRestParams', function() {
  const host = `https://www.test.com`;
  //
  it(`run correctly`, () => {
    const url = `${host}/company/macrohard/devCenter/order/detail/C##`;
    expect(getRestParams(`${host}/company/{company}/{department}/order/detail/{part}`, url)).toStrictEqual({ company: 'macrohard', part: 'C##', department: 'devCenter' });
  });

  //
  it(`run correctly with some more query params`, () => {
    const url = `${host}/company/macrohard/order/detail/C##?version=3`;
    expect(getRestParams(`${host}/company/{company}/order/detail/{part}`, url)).toStrictEqual({ company: 'macrohard', part: 'C##', version: '3' });
  });

  // 没有值得查询的匹配参数时报错
  it(`throw an error when didn't specified a param in searching`, () => {
    const url = `${host}/company/macrohard/order/detail/C##?version=3`;
    expect(() => getRestParams(`${host}/company/company/order/detail/part`, url)).toThrow('invalid params matcher');
  });
});
