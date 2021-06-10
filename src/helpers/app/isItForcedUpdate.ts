import { logger } from '../../lib/logger';
import { forceArgs } from '../../config';

export const isItForcedUpdate = () => {
  logger.verbose('Checking if update was forced...');

  const result = forceArgs.some(arg => process.argv.includes(arg));

  if (result) logger.verbose('Update forced!');

  return result;
};
