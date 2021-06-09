import { TwitterSettings } from '../../types';

const { env } = process;

export const twitter: TwitterSettings = {
  enabled: env.TWITTER_ENABLE === 'true' || false,
  username: env.TWITTER_USERNAME!,
};
