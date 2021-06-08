const { env } = process;

export const mastodon = {
  host: env.MASTODON_HOST,
  username: env.MASTODON_USERNAME,
  client: {
    key: env.MASTODON_CLIENT_KEY,
    secret: env.MASTODON_CLIENT_SECRET,
    accessToken: env.MASTODON_ACCESS_TOKEN,
  },
};
