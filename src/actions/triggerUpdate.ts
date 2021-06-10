import { ArticleObject } from '../types';
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

const determineInitialAppState = (cachedArticle: ArticleObject) => {
  const isForcedUpdate = isItForcedUpdate();

  if (!cachedArticle) logger.verbose('Article cache is empty!');

  if (!cachedArticle && !isForcedUpdate) {
    logger.verbose("Exiting (pass '--skipCache' to force an update)");
    process.exit();
  } else if (isForcedUpdate) {
    logger.verbose('Proceeding despite empty cache...');
  }
};

const determineUpdateState = (oldArticle: ArticleObject, newArticle: ArticleObject | null) => {
  const isUpdateNeeded = compareArticles({
    oldArticle,
    newArticle,
  });

  if (!isUpdateNeeded) {
    logger.verbose('Update not needed, exiting!');
    process.exit();
  }
};

const prepareUpdate = (latestArticle: ArticleObject) => {
  logger.verbose('New article detected - generating update content...');
  return generatePostContent(latestArticle);
};

const postTheUpdate = (content: string) => {
  logger.verbose('Posting on channels...');

  updateAllChannels({
    channels,
    clients,
    updateFn: updateSingleChannel,
    content,
  });
};

const updateCache = (latestArticle: ArticleObject) => {
  logger.verbose('Updating article cache...');

  return updateArticleCache(latestArticle);
};

const finishUpdate = () => {
  logger.verbose('Update done!');
  process.exit();
};

export const triggerUpdate = async () => {
  const cachedArticle = getCachedArticle();

  determineInitialAppState(cachedArticle);

  const latestArticle = await getLatestArticle(feedUrl);

  determineUpdateState(cachedArticle, latestArticle);

  const content = prepareUpdate(latestArticle!);

  postTheUpdate(content);

  updateCache(latestArticle!);

  finishUpdate();
};
