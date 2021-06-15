/* eslint-disable @typescript-eslint/no-unused-vars */
import { start } from '../../src/commands/start';
// import { isItInitialization } from '../../src/helpers';
// import { determineUpdateState } from '../../src/commands/actions';

jest.mock('../../src/lib');
jest.mock('../../src/config');
jest.mock('../../src/helpers');
jest.mock('../../src/helpers/app/isItInitialization');
jest.mock('../../src/commands/actions');

describe('start', () => {
  it('should start the update', () => {
    expect(async () => start()).not.toThrow();
  });
});
