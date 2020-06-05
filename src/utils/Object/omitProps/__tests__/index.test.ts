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

  // 清洗对象原型链上的属性
  it('omit his __proto__ property correctly', function() {
    const theObj = {
      testKey: 'testValue',
      testKey2: 'testValue2',
    };
    Object.prototype['testKey3'] = 'testValue3';
    let testResult = false;
    const omittedObj = omitProps('testKey3', theObj);
    for (const i in omittedObj) {
      if (i === 'testKey3') {
        testResult = true;
      }
    }
    expect(testResult).toBe(true);
  });
});
