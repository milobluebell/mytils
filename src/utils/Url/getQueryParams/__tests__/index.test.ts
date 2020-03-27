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

  // 匹配到，但是没有指定任何值
  it(`no comparation of one param key`, () => {
    const url = `https://www.test.com/testRoute?testF=1&testG`;
    expect(getQueryParams('testG', url)).toBe(true);
  });

  // 不传任何参数
  it(`no $key argument`, () => {
    const url = `https://www.test.com/testRoute?test=1&test2=12#da`;
    expect(getQueryParams(undefined, url)).toStrictEqual({ test: '1', test2: '12#da' });
  });
});
