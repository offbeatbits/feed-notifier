import { MastodonSettings } from '../../types';

const { env } = process;

export const mastodon: MastodonSettings = {
  username: env.MASTODON_USERNAME!,
  host: env.MASTODON_HOST!,
};
