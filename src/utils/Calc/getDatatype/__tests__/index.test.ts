import getDataType, { localeOptions } from '..';

describe('getDatatype', function () {
  const tests = [
    {
      ipt: 123,
      expectation: 'number',
      expectation_local: '数字',
    },
    {
      ipt: `foo`,
      expectation: 'string',
      expectation_local: '字符串',
    },
    {
      ipt: !!0,
      expectation: 'boolean',
      expectation_local: '布尔值',
    },
    {
      ipt: [`f`, `o`, `o`],
      expectation: 'array',
      expectation_local: '数组',
    },
    {
      ipt: new Object({ a: 1, b: `2`, c: { i: 'foo' } }),
      expectation: 'object',
      expectation_local: '对象',
    },
    {
      ipt: null,
      expectation: 'null',
      expectation_local: 'null',
    },
    {
      ipt: undefined,
      expectation: 'undefined',
      expectation_local: 'undefined',
    },
    {
      ipt: NaN,
      expectation: 'NaN',
      expectation_local: 'NaN',
    },
    {
      ipt: new Set([1, 2, 3]),
      expectation: 'set',
      expectation_local: 'Set',
    },
    {
      ipt: new Map().set('test', 'test'),
      expectation: 'map',
      expectation_local: 'Map',
    },
  ];

  // getDataType in english language
  tests.forEach((item) => {
    it(`input is ${item.ipt}`, function () {
      expect(getDataType(item.ipt)).toBe(item.expectation);
    });
  });

  // getDataType in one locale language
  tests.forEach((item) => {
    const localeEnv = 'zh';
    it(`input is ${item.ipt} in locale`, function () {
      expect(getDataType(item.ipt, localeEnv)).toBe(item.expectation_local);
    });
  });

  // 检查locale是否支持
  it('check locale is valid', function () {
    const tester = '12345';
    // @ts-ignore
    expect(() => getDataType(tester, 'zh-cn')).toThrow(`second $param[$locale] should be one of: ${localeOptions.map((item) => `"${item}"`).join(' or ')}`);
  })
});
