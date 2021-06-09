import {
  channels,
  clients,
} from '../config';
import {
  createService,
  getChannelConfigArray,
} from '../helpers';
import {
  logger,
} from '../lib';
import { ChannelConfigRecord } from '../types';

/* eslint-disable no-console */

const updateSingleChannel = ({ type, settings }: ChannelConfigRecord) => {
  logger.info(`Updating channel '${type}'...`);
  if (settings.enabled) {
    const service = createService(type, settings);
    (service as any).testMethod();
    logger.info(`Channel '${type}' updated!`);
  } else {
    logger.info(`Channel '${type}' disabled. Skipping...`);
  }
};

export const updateAllChannels = () => {
  logger.info('Updating all channels...');
  const channelsToUpdate = getChannelConfigArray(channels, clients);
  channelsToUpdate.forEach(channel => updateSingleChannel(channel));
  logger.info('Update complete!');
};
