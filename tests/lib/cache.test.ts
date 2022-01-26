import mock from "mock-fs";
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { Cache } from "../../src/lib/cache";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockFs = (structure?: any) => mock(structure);

describe("Cache", () => {
  it("should implement get method", () => {
    expect(Cache.get).toBeDefined();
  });

  it("should implement set method", () => {
    expect(Cache.set).toBeDefined();
  });

  it("should cache value", () => {
    mockFs();

    const key = "foo1";

    const value = {
      bar1: "baz1",
    };

    Cache.set(key, value);

    expect(Cache.get(key)).toStrictEqual(JSON.stringify(value));
    mock.restore();
  });

  it("should not create cache directory if it exists", () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const cacheDir = process.env.FN_CACHE_DIRECTORY!;
    mockFs({
      [cacheDir]: {},
    });

    const key = "foo2";

    const value = {
      bar2: "baz2",
    };

    Cache.set(key, value);

    expect(Cache.get(key)).toStrictEqual(JSON.stringify(value));
    mock.restore();
  });

  it("should return empty string if cache file is not present", () => {
    mockFs();

    expect(Cache.get("bar3")).toBe("");
    mock.restore();
  });
});
