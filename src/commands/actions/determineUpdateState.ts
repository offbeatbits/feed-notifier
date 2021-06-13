import { ArticleObject } from '../../types';
import { logger } from '../../lib';
import {
  compareArticles,
  isItForcedUpdate,
} from '../../helpers';

export const determineUpdateState = (
  oldArticle: ArticleObject | null,
  newArticle: ArticleObject | null,
) => {
  const skip = isItForcedUpdate();

  const isUpdateNeeded = compareArticles({
    oldArticle,
    newArticle,
    skip,
  });

  logger.info(`Update needed: ${isUpdateNeeded}`);
  return isUpdateNeeded;
};
