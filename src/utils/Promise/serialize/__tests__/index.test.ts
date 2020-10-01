import serialize from '..';

const constants = {
  result_1: {
    order: 0,
    result: 'resolved',
    status: 'fulfilled',
  },
  result_2: {
    order: 0,
    result: 'rejected',
    status: 'rejected',
  },
  result_3: {
    status: 200,
    massage: 'success',
    data: {
      brand_name: 'MUSE',
      album: '《Origin of Symmetry》',
    },
  },
};

const fn1 = function() {
  return Promise.resolve(constants.result_1.result);
};

const fn2 = function() {
  return Promise.reject(constants.result_2.result);
};

/**
 * axios方法会因XHR httpcode报错进入catch，从而执行reject
 */
const fn3 = function() {
  return new Promise((rsl) => {
    return setTimeout(() => {
      rsl(constants.result_3);
    }, 200);
  });
};

describe('serialize', function() {
  // resolve一个promise
  it(`resolve one Promise`, function() {
    return expect(serialize([fn1])).resolves.toEqual([[constants.result_1], []]);
  });

  // reject一个promise
  it(`reject one Promise`, function() {
    return expect(serialize([fn2])).rejects.toEqual([[], [constants.result_2]]);
  });

  // 处理多项均resolved的promise
  it(`handle multi Promise`, function() {
    expect.assertions(1);
    return serialize([fn1, fn2]).catch((err) => {
      expect(err).toEqual([
        [
          {
            order: 0,
            result: constants.result_1.result,
            status: 'fulfilled',
          },
        ],
        [
          {
            order: 1,
            result: constants.result_2.result,
            status: 'rejected',
          },
        ],
      ]);
    });
  });

  // 测试axios
  it(`resolve one Promise`, async function() {
    const result = await serialize([fn3, fn1]);
    expect(result).toEqual([
      [
        {
          order: 0,
          result: constants.result_3,
          status: 'fulfilled',
        },
        {
          order: 1,
          result: constants.result_1.result,
          status: 'fulfilled',
        },
      ],
      [],
    ]);
  });
});
