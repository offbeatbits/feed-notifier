import { Feed } from "../../src/models/Feed";

jest.mock("rss-parser", () =>
  jest.fn().mockImplementation(() => ({
    parseURL: () =>
      Promise.resolve({
        content: {
          lastBuildDate: "mocked_last_build_date",
        },
        lastBuildDate: "mocked_last_build_date",
        items: [
          {
            pubDate: "mocked_last_item_pub_date",
            title: "mocked_last_item_title",
            link: "mocked_last_item_link",
          },
        ],
      }),
  }))
);

// eslint-disable-next-line jest/prefer-lowercase-title
describe("Feed model", () => {
  afterAll(async () => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });

  const feedInstance = new Feed("sample_feed_url");

  const feedMethods = [
    "fetch",
    "getFeedUpdateDate",
    "getLatestPostDate",
    "getLatestPostTitle",
    "getLatestPostUrl",
  ];

  it("should be defined", () => {
    expect(Feed).toBeDefined();
  });

  it("should implement all methods", () => {
    feedMethods.forEach((method) => {
      expect((feedInstance as any)[method]).toBeDefined();
    });
  });

  it("should return feed update date", async () => {
    expect.assertions(1);
    const feed = await feedInstance.fetch();
    expect(feed.getFeedUpdateDate()).toMatchSnapshot();
  });

  it("should return latest post date", async () => {
    expect.assertions(1);
    const feed = await feedInstance.fetch();
    expect(feed.getLatestPostDate()).toMatchSnapshot();
  });

  it("should return latest post title", async () => {
    expect.assertions(1);
    const feed = await feedInstance.fetch();
    expect(feed.getLatestPostTitle()).toMatchSnapshot();
  });

  it("should return latest post URL", async () => {
    expect.assertions(1);
    const feed = await feedInstance.fetch();
    expect(feed.getLatestPostUrl()).toMatchSnapshot();
  });
});
