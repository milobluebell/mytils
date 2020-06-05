import encodeUTF8 from '../index';

describe('countdown', function() {
  it(`run correctly`, function() {
    const str = `麻麻，我想吃烤山药`;
    expect(encodeUTF8(str)).toBe(`&#x9EBB;&#x9EBB;&#xFF0C;&#x6211;&#x60F3;&#x5403;&#x70E4;&#x5C71;&#x836F;`);
  });
});
