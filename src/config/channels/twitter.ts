import { boolean } from "../../utils";
import { TwitterSettings } from "../../types";

const { env } = process;

export const twitter: TwitterSettings = {
  enabled: boolean(env.FN_TWITTER_ENABLE),
  username: env.FN_TWITTER_USERNAME!,
};
