import { boolean } from '../../src/utils/boolean';

describe('boolean', () => {
  it('should return true for true as a string', () => {
    expect((boolean('true'))).toBe(true);
  });

  it('should return false for any string other than true', () => {
    expect((boolean('nottrue'))).toBe(false);
  });
});
