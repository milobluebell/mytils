import getRestParams from '../index';

describe('getQueryParams', function() {
  //
  it(`run correctly`, () => {
    const url = `https://www.test.com/company/macrohard/order/detail/C##?version=3`;
    expect(getRestParams(`/company/{company}/order/detail/{part}`)).toStrictEqual({ company: 'macrohard', part: 'C##' });
  });

  //
  it(`run correctly with some more query params`, () => {
    const url = `https://www.test.com/company/macrohard/order/detail/C##?version=3`;
    expect(getRestParams(`/company/{company}/order/detail/{part}`)).toStrictEqual({ company: 'macrohard', part: 'C##', version: 3 });
  });
});
