// eslint-disable-next-line @typescript-eslint/no-redeclare
import { Cache } from "../../../src/lib/cache";
import { getCachedArticle } from "../../../src/helpers/articles/getCachedArticle";

const sampleArticle = {
  feedUpdateDate: "2021-06-04T11:20:42Z",
  date: "2021-06-04T11:20:42Z",
  title: "sample_title_1",
  url: "sample_url_1",
};

jest.mock("../../../src/lib/cache", () => ({
  Cache: {
    get: jest.fn().mockImplementation(() => JSON.stringify(sampleArticle)),
  },
}));

describe("getCachedArticle", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get cached article", () => {
    expect(getCachedArticle()).toMatchSnapshot();
  });

  it("should return null if Cache contains no article", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Cache as any).get = () => null;
    expect(getCachedArticle()).toBeNull();
  });
});
