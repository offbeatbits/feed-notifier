const { env } = process;

export const mastodon = {
  key: env.MASTODON_CLIENT_KEY,
  secret: env.MASTODON_CLIENT_SECRET,
  accessToken: env.MASTODON_ACCESS_TOKEN,
};
