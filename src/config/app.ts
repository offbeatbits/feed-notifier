import { boolean } from '../utils';

export const enableLogging = boolean(process.env.FN_LOGGING_ENABLE);
export const enableVerboseLogging = boolean(process.env.FN_LOGGING_VERBOSE_ENABLE);
export const cacheDir = process.env.FN_CACHE_DIRECTORY;
