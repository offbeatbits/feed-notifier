import {
  app,
} from '../config';

const {
  enableLogging,
  enableVerboseLogging,
} = app;

export const logger = {
  info: (content: any) => {
    if (enableLogging) {
      console.log(`[info] ${content}`); // eslint-disable-line
    }
  },
  verbose: (content: any) => {
    if (enableVerboseLogging) {
      console.log(`[verbose] ${content}`); // eslint-disable-line
    }
  },
};
