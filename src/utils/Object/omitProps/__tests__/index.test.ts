import omitProps from '..';

describe('omitProps', function() {
  // 清洗单条自身属性
  it('omit own property correctly by single key params', function() {
    const theObj = {
      testKey: 'testValue',
      testKey2: 'testValue2',
      testKey3: {
        innerKey: 'innerKey',
      },
    };
    expect(omitProps(['testKey3'], theObj)).toEqual({
      testKey: 'testValue',
      testKey2: 'testValue2',
    });
  });

  // 清洗多条自身属性
  it('omit own property correctly by mutiple key params', function() {
    const theObj = {
      testKey: 'testValue',
      testKey2: 'testValue2',
      testKey3: {
        innerKey: 'innerKey',
      },
    };
    expect(omitProps(['testKey', 'testKey3'], theObj)).toEqual({
      testKey2: 'testValue2',
    });
  });

  // 传入targetObj参数必须是object类型
  it('second param must be object type', function() {
    expect(() => omitProps(['testKey', 'testKey3'], [1, 2])).toThrow(`targetObj should be an object,but got array`);
  });
});
