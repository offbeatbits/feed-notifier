import {
  channels,
  clients,
} from '../config';
import { getChannelArray } from '../helpers';
import { ChannelConfigRecord } from '../types';

/* eslint-disable no-console */

const updateSingleChannel = (channelConfig: ChannelConfigRecord) => {
  console.log(`updating channel: ${channelConfig.type}...`);
  console.log(channelConfig);
};

export const updateAllChannels = () => {
  const channelsToUpdate = getChannelArray(channels, clients);
  channelsToUpdate.forEach(channel => updateSingleChannel(channel));
};
