import {
  app,
} from '../config';

const {
  enableLogging,
  enableVerboseLogging,
} = app;

export const logger = {
  info: (content: string) => {
    if (enableLogging) {
      console.log(`[info] ${content}`); // eslint-disable-line
    }
  },
  verbose: (content: string) => {
    if (enableVerboseLogging) {
      console.log(`[verbose] ${content}`); // eslint-disable-line
    }
  },
};
