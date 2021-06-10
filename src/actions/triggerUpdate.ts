import { logger } from '../lib';

// import {
//   channels,
//   clients,
//   // feedUrl,
// } from '../config';

// import {
//   updateAllChannels,
//   updateSingleChannel,
// } from './update';

import {
  isItForcedUpdate,
  getCachedArticle,
} from '../helpers';

// import {
//   fetch as fetchFeed,
// } from './feed';

export const triggerUpdate = async () => {
  const isForcedUpdate = isItForcedUpdate();
  const cachedArticle = getCachedArticle();
  console.log(cachedArticle); // eslint-disable-line

  if (!cachedArticle && !isForcedUpdate) {
    logger.verbose('Article cache is empty, exiting...');
    process.exit();
  }

  logger.verbose('Posting new article despite empty cache');

  // const latestArticle = getLatestArticle();
  // const isUpdateNeeded = compareArticles(latestArticle, cachedArticle);

  // if (!isUpdateNeeded) process.exit();

  // logger.info('New article detected - posting a link');

  // const { title, url } = latestArticle;
  // const content = `${title} ${url}`;

  // updateAllChannels({
  //   channels,
  //   clients,
  //   updateFn: updateSingleChannel,
  //   content,
  // });

  // logger.info('Update complete!');

  // Up

  // else:

  // get latest article metadata

  // if its the same - exit

  // else: - update

  // save new article state in cache

  // const content = 'foo';
  // logger.verbose(`Found channel feed URL: ${feedUrl}`);

  // logger.verbose('Fetching feed...');

  // const feed = await fetchFeed(feedUrl);

  // console.log(feed.getFeedUpdateDate()); // eslint-disable-line
  // console.log(feed.getLatestPostDate()); // eslint-disable-line
  // console.log(feed.getLatestPostTitle()); // eslint-disable-line
  // console.log(feed.getLatestPostUrl()); // eslint-disable-line
  // console.log(feed.getLatestPostId()); // eslint-disable-line

  // logger.info('Updating all channels...');
};
