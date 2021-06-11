import { logger } from '../../lib/logger';
import { cache } from '../../lib/cache';

import { ArticleObject } from '../../types';

export const updateArticleCache = (article: ArticleObject | null) => {
  if (!article) {
    logger.verbose('Article empty, caching skipped!');
  } else {
    cache.set('latest', article);
    logger.verbose('Article cache updated!');
  }
};
