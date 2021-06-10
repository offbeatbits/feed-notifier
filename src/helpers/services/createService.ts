import {
  TwitterService,
  MastodonService,
} from '../../services';
import { serviceMappings } from '../../config';
import {
  ChannelName,
  ServiceClassSettings,
  MastodonSettings,
} from '../../types';

type ServiceInstance = typeof TwitterService | typeof MastodonService;

export const createService = (
  type: ChannelName,
  settings: ServiceClassSettings,
) =>
  new (serviceMappings[type] as any)({ // oof :(
    username: settings.username,
    host: (settings as MastodonSettings).host,
    settings: settings.client,
  }) as ServiceInstance;
