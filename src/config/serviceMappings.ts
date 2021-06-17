import {
  TwitterService,
  MastodonService,
  MauticService,
} from '../services';

export const serviceMappings = {
  twitter: TwitterService,
  mastodon: MastodonService,
  mautic: MauticService,
};
