import {
  ChannelConfig,
  ChannelName,
  OAuth2ServiceSettings,
  ChannelSettings,
  ChannelConfigArray,
} from '../types';

export const getChannelConfigArray = (
  channels: ChannelConfig<ChannelSettings>,
  clients: ChannelConfig<OAuth2ServiceSettings>,
) => (Object.keys(channels) as Array<ChannelName>).map(channelKey => ({
  type: channelKey,
  ...channels[channelKey],
  ...clients[channelKey],
})) as ChannelConfigArray;
