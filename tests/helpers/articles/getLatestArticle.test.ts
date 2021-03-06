import { Feed } from "../../../src/models/Feed";
import { getLatestArticle } from "../../../src/helpers/articles/getLatestArticle";

jest.mock("rss-parser", () =>
  jest.fn().mockImplementation(() => ({
    parseURL: () =>
      Promise.resolve({
        content: {
          lastBuildDate: "gla_mocked_last_build_date",
        },
        lastBuildDate: "gla_mocked_last_build_date",
        items: [
          {
            pubDate: "gla_mocked_last_item_pub_date",
            title: "gla_mocked_last_item_title",
            link: "gla_mocked_last_item_link",
          },
        ],
      }),
  }))
);

describe("getLatestArticle", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get latest article", async () => {
    expect.assertions(1);
    const article = await getLatestArticle("sample_feed_url");
    expect(article).toMatchSnapshot();
  });

  it("should return null if feed returns no article", async () => {
    expect.assertions(1);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Feed.prototype as any).fetch = () => Promise.resolve(null);
    const article = await getLatestArticle("sample_feed_url");
    expect(article).toBeNull();
  });
});
