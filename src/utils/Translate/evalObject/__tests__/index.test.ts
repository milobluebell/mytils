import evalObject from '..';

describe('evalObject', function() {
  const tests = [
    {
      ipt: `123`,
      expectation: 123,
    },
    {
      ipt: `false`,
      expectation: false,
    },
    {
      ipt: `['a', 1, true, 'false']`,
      expectation: ['a', 1, true, 'false'],
      testFunc: `toStrictEqual`,
    },
    {
      ipt: `{"a":1,"b":{'c':2}}`,
      expectation: { a: 1, b: { c: 2 } },
      testFunc: `toStrictEqual`,
    },
    {
      ipt: `null`,
      expectation: null,
    },
    {
      ipt: `undefined`,
      expectation: undefined,
    },
    {
      ipt: `NaN`,
      expectation: NaN,
    },
    {
      ipt: `const tester = '123'`,
      expectation: `const tester = '123'`,
    },
  ];

  tests.forEach((item) => {
    it(`input is ${item.ipt}`, function() {
      expect(evalObject(item.ipt))[item.testFunc || 'toBe'](item.expectation);
    });
  });

  // 当输入类型不为string时，提示正确报错
  it(`throw a correct error message for an 'Not String Type' input`, function() {
    // @ts-ignore
    expect(() => evalObject([1, 2])).toThrow('input param should be a string but got one array');
  });
});
