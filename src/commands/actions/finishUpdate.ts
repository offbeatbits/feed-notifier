import { logger } from '../../lib';

export const finishUpdate = () => {
  logger.verbose('Update done!');
  process.exit();
};
