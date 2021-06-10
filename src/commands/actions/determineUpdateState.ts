import { ArticleObject } from '../../types';
import { logger } from '../../lib';
import { compareArticles } from '../../helpers';

export const determineUpdateState = (
  oldArticle: ArticleObject,
  newArticle: ArticleObject | null,
) => {
  const isUpdateNeeded = compareArticles({
    oldArticle,
    newArticle,
  });

  if (!isUpdateNeeded) {
    logger.verbose('Update not needed, exiting!');
    process.exit();
  }
};
