import { logger } from '../lib';

import {
  channels,
  clients,
  feedUrl,
} from '../config';

import {
  updateAllChannels,
  updateSingleChannel,
} from './update';

import {
  fetch as fetchFeed,
} from './feed';

export const triggerUpdate = async () => {
  const content = 'foo';
  logger.verbose(`Found channel feed URL: ${feedUrl}`);

  logger.verbose('Fetching feed...');

  const feed = await fetchFeed(feedUrl);

  console.log(feed.getFeedUpdateDate()); // eslint-disable-line
  console.log(feed.getLatestPostDate()); // eslint-disable-line
  console.log(feed.getLatestPostTitle()); // eslint-disable-line
  console.log(feed.getLatestPostUrl()); // eslint-disable-line
  console.log(feed.getLatestPostId()); // eslint-disable-line

  logger.info('Updating all channels...');

  updateAllChannels({
    channels,
    clients,
    updateFn: updateSingleChannel,
    content,
  });

  logger.info('Update complete!');
};
