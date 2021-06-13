import { logger } from '../../lib/logger';
import { Cache } from '../../lib/cache';
import { app } from '../../config';

import { ArticleObject } from '../../types';

export const getCachedArticle = () => {
  logger.verbose('Getting cached article...');
  const article = Cache.get(app.cacheKey);

  if (article) {
    const parsedArticle = JSON.parse(article) as ArticleObject;

    const {
      feedUpdateDate,
      date,
      title,
      url,
    } = parsedArticle;

    logger.verbose(`Cached feed update date: ${feedUpdateDate}`);
    logger.verbose(`Cached article date: ${date}`);
    logger.verbose(`Cached article title: ${title}`);
    logger.verbose(`Cached article URL: ${url}`);

    return parsedArticle;
  }
  return null;
};
