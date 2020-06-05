import hasProp from '..';

describe('hasProp', function() {
  // 正确判断对象自身的属性
  it('input is chars', function() {
    const theObj = {
      testKey: 'testKey',
      testKey2: 'testKey2',
    };
    expect(hasProp('testKey', theObj)).toEqual(true);
    expect(hasProp('testKey3', theObj)).toEqual(false);
  });
});
