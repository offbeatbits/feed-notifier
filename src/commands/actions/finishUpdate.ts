import { logger } from '../../lib';

export const finishUpdate = (initialize?: boolean) => {
  if (initialize) {
    logger.verbose('Initialization done!');
  } else {
    logger.verbose('Update done!');
  }
  process.exit();
};
