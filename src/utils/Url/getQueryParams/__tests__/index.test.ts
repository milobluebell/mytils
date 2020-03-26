import getQueryParams from '../index';

describe('getQueryParams', function() {
  //
  it(`run correctly in one string param with a configured url`, () => {
    const url = `https://www.test.com/testRoute?testA=c&testB=d`;
    expect(getQueryParams('testA', url)).toBe('c');
  });

  //
  it(`run correctly in one array param with a configured url`, () => {
    const url = `https://www.test.com/testRoute?testA=c&testB=d`;
    expect(getQueryParams(['testA', 'testB'], url)).toStrictEqual({ testA: 'c', testB: 'd' });
  });

  // 没有匹配到任何值
  it(`no comparation of one param key`, () => {
    const url = `https://www.test.com/testRoute?testC=e&testD=f`;
    expect(getQueryParams('testE', url)).toBe(null);
  });
});
