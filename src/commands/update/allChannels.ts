import { getChannelConfigArray } from '../../helpers';
import {
  ChannelConfig,
  ChannelSettings,
  OAuth2ServiceSettings,
  ChannelConfigRecord,
} from '../../types';

interface UpdateAllChannelsArgs {
  channels: ChannelConfig<ChannelSettings>,
  clients: ChannelConfig<OAuth2ServiceSettings>,
  updateFn: (channel: ChannelConfigRecord, content: string) => void,
  content: string,
}

export const updateAllChannels = ({
  channels,
  clients,
  updateFn,
  content,
}: UpdateAllChannelsArgs) => {
  const channelsToUpdate = getChannelConfigArray(channels, clients);
  channelsToUpdate.forEach(channel => updateFn(channel, content));
};
