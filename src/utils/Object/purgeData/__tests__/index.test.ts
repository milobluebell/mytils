import purgeData from '..';

const objTester = { a: 1, b: 2, c: undefined, d: null, e: false, f: true, g: '' };
const arrayTester = [undefined, null, 1, 2, false, 3, true, '', '123'];
describe('purgeData', function() {
  // 清洗对象是Object，使用默认断言
  it('input is an object, with default params', function() {
    const expectation = { a: 1, b: 2, e: false, f: true, g: '' };
    expect(purgeData(objTester)).toStrictEqual(expectation);
  });

  // 清洗对象是Array，使用默认断言
  it('input is an array, with default params', function() {
    const expectation = [1, 2, false, 3, true, '', '123'];
    expect(purgeData(arrayTester)).toStrictEqual(expectation);
  });

  // 清洗对象是Array，使用【指定断言】
  it('input is an array, with an specified params', function() {
    const expectation = { a: 1, b: 2, c: undefined, d: null, f: true };
    expect(purgeData(objTester, ['', false])).toStrictEqual(expectation);
  });

  // 清洗对象是Array，使用【指定断言】
  it('input is an array, with an specified params', function() {
    const arrayTester = [undefined, null, 1, 2, 3, true, '123'];
    expect(purgeData(arrayTester, ['', false])).toStrictEqual(arrayTester);
  });
});
