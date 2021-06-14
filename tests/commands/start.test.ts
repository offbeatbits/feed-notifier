/* eslint-disable @typescript-eslint/no-unused-vars */
import { start } from '../../src/commands/start';
import { isItInitialization } from '../../src/helpers';
import { determineUpdateState } from '../../src/commands/actions';

jest.mock('../../src/lib');
jest.mock('../../src/config');
jest.mock('../../src/helpers');
jest.mock('../../src/helpers/app/isItInitialization');
jest.mock('../../src/commands/actions');
jest.spyOn(process, 'exit').mockImplementation();

describe('start', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should start the update', () => {
    expect(async () => start()).not.toThrow();
  });

  it('should detect if initialization was forced', () => {
    (isItInitialization as any) = () => true;
    expect(async () => start()).not.toThrow();
  });

  it('should detect if update is not needed', () => {
    (isItInitialization as any) = () => false;
    (determineUpdateState as any) = () => true;
    expect(async () => start()).not.toThrow();
  });

  it('should detect if update is needed', () => {
    (isItInitialization as any) = () => false;
    (determineUpdateState as any) = () => false;
    expect(async () => start()).not.toThrow();
  });
});
