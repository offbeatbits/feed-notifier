import mockArgv from 'mock-argv';
import { isItForcedUpdate } from '../../../src/helpers/app';
import { forceArgs } from '../../../src/config/forceArgs';

describe('isItForcedUpdate', () => {
  forceArgs.forEach(arg => {
    it(`should return true when ${arg} flag is present`, () => {
      mockArgv([arg], async () => {
        expect(isItForcedUpdate()).toStrictEqual(true);
      });
    });
  });

  it('should return false when no force flags are present', () => {
    mockArgv([], async () => {
      expect(isItForcedUpdate()).toStrictEqual(false);
    });
  });
});
