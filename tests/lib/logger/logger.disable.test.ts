import mockConsole from 'jest-mock-console';
/* eslint-disable no-console */
import { logger } from '../../../src/lib/logger';

jest.mock('../../../src/config/app', () => ({
  enableLogging: false,
  enableVerboseLogging: false,
}));

describe('Logger (disabled)', () => {
  it('info should not call console.log if enableLogging is set to false', () => {
    const restoreConsole = mockConsole();
    logger.info('Test message');
    expect(console.log).toHaveBeenCalledTimes(0);
    restoreConsole();
  });

  it('verbose should not call console.log if enableVerbose is set to false', () => {
    const restoreConsole = mockConsole();
    logger.verbose('Test message');
    expect(console.log).toHaveBeenCalledTimes(0);
    restoreConsole();
  });
});
