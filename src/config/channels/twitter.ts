import { boolean } from '../../utils';
import { TwitterSettings } from '../../types';

const { env } = process;

export const twitter: TwitterSettings = {
  enabled: boolean(env.TWITTER_ENABLE),
  username: env.TWITTER_USERNAME!,
};
