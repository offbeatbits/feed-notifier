const { env } = process;

export const mastodon = {
  username: env.MASTODON_USERNAME,
  host: env.MASTODON_HOST,
};
