const { env } = process;

export const twitter = {
  username: env.TWITTER_USERNAME,
  client: {
    key: env.TWITTER_CLIENT_KEY,
    secret: env.TWITTER_CLIENT_SECRET,
    accessToken: env.TWITTER_CLIENT_ACCESS_TOKEN,
    accessTokenSecret: env.TWITTER_CLIENT_ACCESS_TOKEN_SECRET,
  },
};
