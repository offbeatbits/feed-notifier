import { createService } from "../../../src/helpers/services/createService";

describe("createService", () => {
  const services = [
    {
      type: "twitter",
      settings: {
        username: "sample_twitter_username",
        client: {
          key: "sample_twitter_key",
          secret: "sample_twitter_secret",
          accessToken: "sample_twitter_access_token",
          accessTokenSecret: "sample_twitter_access_token_secret",
        },
      },
    },
    {
      type: "mastodon",
      settings: {
        username: "sample_mastodon_username",
        host: "sample_mastodon_host",
        client: {
          key: "sample_mastodon_key",
          secret: "sample_mastodon_secret",
          accessToken: "sample_mastodon_access_token",
        },
      },
    },
  ];

  services.forEach((service) => {
    it(`should create ${service.type} service`, () => {
      expect(() =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createService(service.type as any, service.settings as any)
      ).not.toThrow();
    });
  });
});
