import getDataType from '../index';

describe('getDatatype', function () {

  const tests = [{
    ipt: 123,
    expectation: 'number'
  }, {
    ipt: `foo`,
    expectation: 'string'
  }, {
    ipt: !!0,
    expectation: 'boolean'
  }, {
    ipt: [`f`, `o`, `o`],
    expectation: 'array'
  }, {
    ipt: new Object({ a: 1, b: `2`, c: { i: 'foo' } }),
    expectation: 'object'
  }, {
    ipt: null,
    expectation: 'null'
  }, {
    ipt: undefined,
    expectation: 'undefined'
  }, {
    ipt: NaN,
    expectation: 'NaN'
  }, {
    ipt: Symbol.for('foo'),
    expectation: 'symbol'
  }, {
    ipt: new Set([1, 2, 3]),
    expectation: 'set'
  }, {
    ipt: new Map().set('test', 'test'),
    expectation: 'map'
  }];

  tests.forEach(item => {
    it(`input is ${item.expectation}`, function () {
      expect(getDataType(item.ipt)).toBe(item.expectation);
    });
  });

});
