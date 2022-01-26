// eslint-disable-next-line @typescript-eslint/no-redeclare
import { Cache } from "../../../src/lib/cache";
import { updateArticleCache } from "../../../src/helpers/articles/updateArticleCache";

const sampleArticle = {
  feedUpdateDate: "2021-06-04T11:20:42Z",
  date: "2021-06-04T11:20:42Z",
  title: "sample_title_1",
  url: "sample_url_1",
};

jest.mock("../../../src/lib/cache", () => ({
  Cache: {
    // eslint-disable-next-line no-empty-pattern
    set: jest.fn().mockImplementation(({}, value) => JSON.stringify(value)),
  },
}));

describe("updateArticleCache", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update article cache", () => {
    updateArticleCache(sampleArticle);
    expect(Cache.set).toHaveBeenCalledTimes(1);
  });

  it("should not update article cache if null is passed", () => {
    updateArticleCache(null);
    expect(Cache.set).toHaveBeenCalledTimes(0);
  });
});
