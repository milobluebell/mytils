import decodeUTF8 from '../index';

describe('decodeUTF8', function() {
  it(`run correctly`, function() {
    const str = `&#x9EBB;&#x9EBB;&#xFF0C;&#x6211;&#x60F3;&#x5403;&#x70E4;&#x5C71;&#x836F;`;
    expect(decodeUTF8(str)).toBe(`麻麻，我想吃烤山药`);
  });
});
