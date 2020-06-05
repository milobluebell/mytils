import evelObject from '..';

describe('evelObject', function() {
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
  ];

  tests.forEach((item) => {
    it(`input is ${item.ipt}`, function() {
      expect(evelObject(item.ipt))[item.testFunc || 'toBe'](item.expectation);
    });
  });
});
