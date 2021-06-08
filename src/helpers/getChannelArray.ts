import {
  ChannelConfig,
  ChannelName,
  OAuth2ServiceSettings,
  ChannelSettings,
} from '../types';

export const getChannelArray = (
  channels: ChannelConfig<ChannelSettings>,
  clients: ChannelConfig<OAuth2ServiceSettings>,
) => (Object.keys(channels) as Array<ChannelName>).map(channelKey => ({
  type: channelKey,
  ...channels[channelKey],
  ...clients[channelKey],
}));
