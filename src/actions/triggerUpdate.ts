import { logger } from '../lib';
import {
  channels,
  clients,
} from '../config';
import {
  updateAllChannels,
  updateSingleChannel,
} from './update';

export const triggerUpdate = () => {
  const content = 'foo';
  logger.info('Updating all channels...');
  updateAllChannels({
    channels,
    clients,
    updateFn: updateSingleChannel,
    content,
  });
  logger.info('Update complete!');
};
