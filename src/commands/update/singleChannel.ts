import { logger } from '../../lib';
import { createService } from '../../helpers/services';
import { ChannelConfigRecord } from '../../types';

export const updateSingleChannel = async (
  { type, settings }: ChannelConfigRecord,
  content: string,
) => {
  logger.info(`Updating channel '${type}'...`);

  if (settings.enabled) {
    const service = createService(type, settings);
    logger.verbose(`Posting content: ${content}`);
    const statusURL = await service.post(content);
    logger.info(`Status URL: ${statusURL}`);
    logger.info(`Channel '${type}' updated!`);
  } else {
    logger.info(`Channel '${type}' disabled. Skipping...`);
  }
};
