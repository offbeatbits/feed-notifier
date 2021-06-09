import { boolean } from '../utils';

export const enableLogging = boolean(process.env.LOGGING_ENABLE);
export const enableVerboseLogging = boolean(process.env.LOGGING_VERBOSE_ENABLE);
