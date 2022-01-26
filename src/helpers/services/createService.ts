import { TwitterService, MastodonService } from "../../services";
import { serviceMappings } from "../../config";
import {
  ChannelName,
  ServiceClassSettings,
  MastodonSettings,
} from "../../types.d";

type ServiceInstance = TwitterService | MastodonService;

export const createService = (
  type: ChannelName,
  settings: ServiceClassSettings
) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (serviceMappings[type] as any)({
    // oof :(
    username: settings.username,
    host: (settings as MastodonSettings).host,
    settings: settings.client,
  }) as ServiceInstance;
