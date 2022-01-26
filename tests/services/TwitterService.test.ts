import { TwitterService } from "../../src/services/TwitterService";

jest.mock("twitter-api-client", () => ({
  TwitterClient: jest.fn().mockImplementation(() => ({
    tweets: {
      statusesUpdate: () =>
        Promise.resolve({
          id_str: "sample_tweet_id",
        }),
    },
  })),
}));

describe("MastodonService", () => {
  const twitterInstance = new TwitterService({
    enabled: true,
    username: "testUsername",
    settings: {
      key: "sample_key",
      secret: "sample_secret",
      accessToken: "sample_access_token",
      accessTokenSecret: "sample_access_token_secret",
    },
  });

  it("should be defined", () => {
    expect(TwitterService).toBeDefined();
  });

  it("should define post method", () => {
    expect(twitterInstance.post).toBeDefined();
  });

  it("post method should return status URL", async () => {
    expect.assertions(1);
    const uri = await twitterInstance.post("sample_status");
    expect(uri).toMatchSnapshot();
  });
});
