import { logger } from '../../lib/logger';
import { Cache } from '../../lib/cache';
import { app } from '../../config';

import { ArticleObject } from '../../types';

export const updateArticleCache = (article: ArticleObject | null) => {
  if (!article) {
    logger.verbose('Article empty, caching skipped!');
  } else {
    Cache.set(app.cacheKey, article);
    logger.verbose('Article cache updated!');
  }
};
