import { ArticleObject } from '../../types';
import { logger } from '../../lib';
import { generatePostContent } from '../../helpers';

export const prepareUpdate = (latestArticle: ArticleObject) => {
  logger.info('New article detected - generating update content...');
  return generatePostContent(latestArticle);
};
