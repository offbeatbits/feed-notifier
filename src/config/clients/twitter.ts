import { OAuth2ServiceSettings } from "../../types";

const { env } = process;

export const twitter = {
  key: env.FN_TWITTER_CLIENT_KEY!,
  secret: env.FN_TWITTER_CLIENT_SECRET!,
  accessToken: env.FN_TWITTER_CLIENT_ACCESS_TOKEN!,
  accessTokenSecret: env.FN_TWITTER_CLIENT_ACCESS_TOKEN_SECRET!,
} as OAuth2ServiceSettings;
