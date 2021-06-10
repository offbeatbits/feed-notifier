import { logger } from '../../lib/logger';
import { forceArgs } from '../../config';

export const isItForcedUpdate = () => {
  logger.verbose('Checking if update was forced');

  const result = forceArgs.some(arg => process.argv.includes(arg));

  logger.verbose(`Update forced: ${result}`);

  return result;
};
