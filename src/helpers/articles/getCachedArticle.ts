import { logger } from '../../lib/logger';
// import { cache } from '../../lib/cache';

import { ArticleObject } from '../../types';

export const getCachedArticle = () => {
  logger.verbose('Getting cached article...');
  const article = {
    feedUpdateDate: '1',
    date: '1',
    title: 'a',
    url: 'https//dishonest-review/',
  } as ArticleObject;

  logger.verbose(`Cached feed update date: ${article.feedUpdateDate}`);
  logger.verbose(`Cached article date: ${article.date}`);
  logger.verbose(`Cached article title: ${article.title}`);
  logger.verbose(`Cached article URL: ${article.url}`);

  return article;
};
