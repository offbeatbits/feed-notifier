import { MastodonSettings } from '../../types';

const { env } = process;

export const mastodon: MastodonSettings = {
  enabled: env.MASTODON_ENABLE === 'true' || false,
  username: env.MASTODON_USERNAME!,
  host: env.MASTODON_HOST!,
};
