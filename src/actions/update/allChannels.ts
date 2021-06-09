import {
  getChannelConfigArray,
} from '../../helpers';
import {
  ChannelConfig,
  ChannelSettings,
  OAuth2ServiceSettings,
  ChannelConfigRecord,
} from '../../types';
// import {
//   logger,
// } from '../../lib';

export const updateAllChannels = (
  channels: ChannelConfig<ChannelSettings>,
  clients: ChannelConfig<OAuth2ServiceSettings>,
  updateFn: (channel: ChannelConfigRecord) => void,
) => {
  // logger.info('Updating all channels...');
  const channelsToUpdate = getChannelConfigArray(channels, clients);
  channelsToUpdate.forEach(updateFn);
  // logger.info('Update complete!');
};
