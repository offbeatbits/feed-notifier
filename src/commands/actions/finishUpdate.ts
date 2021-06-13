import { logger } from '../../lib';

export const finishUpdate = (initialize?: boolean) => {
  if (initialize) {
    logger.info('Initialization done!');
  } else {
    logger.info('Update done!');
  }
};
