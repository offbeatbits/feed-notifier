import mockArgv from 'mock-argv';
import { forceArgs } from '../../../src/config/forceArgs';
import { initArgs } from '../../../src/config/initArgs';
import { determineInitialAppState } from '../../../src/commands/actions/determineInitialAppState';

jest.spyOn(process as any, 'exit').mockImplementation(() => {});

const sampleCachedArticle = {
  feedUpdateDate: '2021-06-04T11:20:42Z',
  date: '2021-06-04T11:20:42Z',
  title: 'sample_title_1',
  url: 'sample_url_1',
};

describe('determineInitialAppState', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should detect if article cache is empty and no params were provided', () => {
    expect(() => determineInitialAppState(null)).not.toThrow();
  });

  it('should detect if article cache is empty and update was forced', () => {
    forceArgs.forEach(forceArg => {
      mockArgv([forceArg], async () => {
        expect(() => determineInitialAppState(null)).not.toThrow();
      });
    });
  });

  it('should detect if article cache is empty and initialization was forced', () => {
    initArgs.forEach(initArg => {
      mockArgv([initArg], async () => {
        expect(() => determineInitialAppState(null)).not.toThrow();
      });
    });
  });

  it('should detect if article cache is not empty', () => {
    expect(() => determineInitialAppState(sampleCachedArticle)).not.toThrow();
  });

  it('should detect if both force and init params were provided', () => {
    forceArgs.forEach(forceArg => {
      initArgs.forEach(initArg => {
        mockArgv([forceArg, initArg], async () => {
          expect(() => determineInitialAppState(null)).not.toThrow();
        });
      });
    });
  });
});
