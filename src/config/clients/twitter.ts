const { env } = process;

export const twitter = {
  key: env.TWITTER_CLIENT_KEY,
  secret: env.TWITTER_CLIENT_SECRET,
  accessToken: env.TWITTER_CLIENT_ACCESS_TOKEN,
  accessTokenSecret: env.TWITTER_CLIENT_ACCESS_TOKEN_SECRET,
};
