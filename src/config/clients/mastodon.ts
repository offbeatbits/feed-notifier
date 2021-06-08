import { OAuth2ServiceSettings } from '../../types';

const { env } = process;

export const mastodon = {
  key: env.MASTODON_CLIENT_KEY!,
  secret: env.MASTODON_CLIENT_SECRET!,
  accessToken: env.MASTODON_ACCESS_TOKEN!,
} as OAuth2ServiceSettings;
