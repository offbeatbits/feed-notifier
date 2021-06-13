import mock from 'mock-fs';
import { Cache } from '../../src/lib/cache';

const mockFs = (structure?: any) => mock(structure);

describe('Cache', () => {
  it('should implement get method', () => {
    expect(Cache.get).toBeDefined();
  });

  it('should implement set method', () => {
    expect(Cache.set).toBeDefined();
  });

  it('should cache value', () => {
    mockFs();

    Cache.set('foo1', {
      bar: 'baz',
    });
    expect(Cache.get('foo1')).toMatchSnapshot();
    mock.restore();
  });

  it('should not create cache directory if it exists', () => {
    const cacheDir = process.env.FN_CACHE_DIRECTORY!;
    mock({
      [cacheDir]: {},
    });

    Cache.set('foo2', {
      bar: 'baz',
    });

    expect(Cache.get('foo2')).toMatchSnapshot();
    mock.restore();
  });
});
