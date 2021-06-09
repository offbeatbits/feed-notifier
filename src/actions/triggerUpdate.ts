import {
  channels,
  clients,
} from '../config';
import {
  updateAllChannels,
  updateSingleChannel,
} from './update';

export const triggerUpdate = () => {
  updateAllChannels(
    channels,
    clients,
    updateSingleChannel,
  );
};
