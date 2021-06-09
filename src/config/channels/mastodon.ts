import { boolean } from '../../utils';
import { MastodonSettings } from '../../types';

const { env } = process;

export const mastodon: MastodonSettings = {
  enabled: boolean(env.MASTODON_ENABLE),
  username: env.MASTODON_USERNAME!,
  host: env.MASTODON_HOST!,
};
