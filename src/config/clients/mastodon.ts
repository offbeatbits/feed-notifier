import { OAuth2ServiceSettings } from '../../types';

const { env } = process;

export const mastodon = {
  key: env.FN_MASTODON_CLIENT_KEY!,
  secret: env.FN_MASTODON_CLIENT_SECRET!,
  accessToken: env.FN_MASTODON_ACCESS_TOKEN!,
} as OAuth2ServiceSettings;
