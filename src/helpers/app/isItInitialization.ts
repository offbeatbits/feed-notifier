import { logger } from "../../lib/logger";
import { initArgs } from "../../config";

export const isItInitialization = () => {
  logger.verbose("Checking if '--initialize' flag was passed...");

  const result = initArgs.some((arg) => process.argv.includes(arg));

  if (result)
    logger.verbose(
      "Initialization flag was passed - no updates will be posted!"
    );

  return result;
};
