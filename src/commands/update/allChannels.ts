import { getChannelConfigArray } from "../../helpers";
import {
  ChannelConfig,
  ChannelSettings,
  OAuth2ServiceSettings,
  ChannelConfigRecord,
} from "../../types";

interface UpdateAllChannelsArgs {
  channels: ChannelConfig<ChannelSettings>;
  clients: ChannelConfig<OAuth2ServiceSettings>;
  updateFn: (channel: ChannelConfigRecord, content: string) => void;
  content: string;
}

export const updateAllChannels = async ({
  channels,
  clients,
  updateFn,
  content,
}: UpdateAllChannelsArgs) => {
  const channelsToUpdate = getChannelConfigArray(channels, clients);
  await channelsToUpdate.forEach((channel) =>
    Promise.resolve(updateFn(channel, content))
  );
};
