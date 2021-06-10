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
  isItForcedUpdate,
  getCachedArticle,
  getLatestArticle,
  compareArticles,
  generatePostContent,
  updateArticleCache,
} from '../helpers';

export const triggerUpdate = async () => {
  const isForcedUpdate = isItForcedUpdate();
  const cachedArticle = getCachedArticle();

  if (!cachedArticle) logger.verbose('Article cache is empty!');

  if (!cachedArticle && !isForcedUpdate) {
    logger.verbose("Exiting (pass '--skipCache' to force an update)");
    process.exit();
  } else if (isForcedUpdate) {
    logger.verbose('Proceeding despite empty cache...');
  }

  const latestArticle = await getLatestArticle(feedUrl);

  const isUpdateNeeded = compareArticles({
    oldArticle: cachedArticle,
    newArticle: latestArticle,
  });

  if (!isUpdateNeeded) {
    logger.verbose('Update not needed, exiting!');
    process.exit();
  }

  logger.verbose('New article detected - generating update content...');

  const content = generatePostContent(latestArticle!);

  logger.verbose('Posting on channels...');

  updateAllChannels({
    channels,
    clients,
    updateFn: updateSingleChannel,
    content,
  });

  logger.verbose('Updating article cache...');

  updateArticleCache(latestArticle);

  logger.verbose('Update done!');

  process.exit();
};
