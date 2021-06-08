import { TwitterSettings } from '../../types';

const { env } = process;

export const twitter: TwitterSettings = {
  username: env.TWITTER_USERNAME!,
};
