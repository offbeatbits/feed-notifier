import { logger } from '../../lib';
import { createService } from '../../helpers/services';
import { ChannelConfigRecord } from '../../types';

export const updateSingleChannel = (
  { type, settings }: ChannelConfigRecord,
  content: string,
) => {
  logger.info(`Updating channel '${type}'...`);

  if (settings.enabled) {
    const service = createService(type, settings);
    (service as any).testMethod();
    logger.verbose(`Got content: ${content}`);
    logger.info(`Channel '${type}' updated!`);
  } else {
    logger.info(`Channel '${type}' disabled. Skipping...`);
  }
};
