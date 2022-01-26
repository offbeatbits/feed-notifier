import { MastodonService } from "../../src/services/MastodonService";

jest.mock("megalodon", () =>
  jest.fn(() => ({
    postStatus: () =>
      Promise.resolve({
        data: {
          uri: "sample_uri_from_inline_megalodon_mock",
        },
      }),
  }))
);

describe("MastodonService", () => {
  const mastodonInstance = new MastodonService({
    enabled: true,
    username: "testUsername",
    host: "sample_host",
    settings: {
      key: "sample_key",
      secret: "sample_secret",
      accessToken: "sample_access_token",
    },
  });

  it("should be defined", () => {
    expect(MastodonService).toBeDefined();
  });

  it("should define post method", () => {
    expect(mastodonInstance.post).toBeDefined();
  });

  it("post method should return status URL", async () => {
    expect.assertions(1);
    const uri = await mastodonInstance.post("sample_status");
    expect(uri).toMatchSnapshot();
  });
});
