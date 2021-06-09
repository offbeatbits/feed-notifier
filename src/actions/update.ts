import {
  channels,
  clients,
} from '../config';
import {
  createService,
  getChannelConfigArray,
} from '../helpers';
import { ChannelConfigRecord } from '../types';

/* eslint-disable no-console */

const updateSingleChannel = ({ type, settings }: ChannelConfigRecord) => {
  console.log(`updating channel: ${type}...`);
  const service = createService(type, settings);
  console.log(service);
  (service as any).testMethod();
};

export const updateAllChannels = () => {
  const channelsToUpdate = getChannelConfigArray(channels, clients);
  channelsToUpdate.forEach(channel => updateSingleChannel(channel));
};
