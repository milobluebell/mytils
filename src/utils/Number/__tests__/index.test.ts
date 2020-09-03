import { supplyZero } from '../aux';

describe('supplyZero', function() {
  it(`calculate correctly with precision in 1`, function() {
    const tester = 12.21;
    expect(supplyZero(tester, 1)).toBe(12.21);
  });

  it(`calculate it with a precision equalled the digit of decimal, correctly `, function() {
    const tester = 12.21;
    expect(supplyZero(tester, 2)).toBe(12.21);
  });

  it(`calculate correctly with precision in 5`, function() {
    const tester = 12.21;
    expect(supplyZero(tester, 5)).toBe('12.21000');
  });
});
