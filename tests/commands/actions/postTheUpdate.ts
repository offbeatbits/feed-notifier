import { logger } from '../../lib';

import {
  updateAllChannels,
  updateSingleChannel,
} from '../update';

interface UpdateParams {
  channels: any;
  clients: any;
  content: string;
}

export const postTheUpdate = ({
  channels,
  clients,
  content,
}: UpdateParams) => {
  logger.verbose('Posting on channels...');

  updateAllChannels({
    channels,
    clients,
    updateFn: updateSingleChannel,
    content,
  });
};
