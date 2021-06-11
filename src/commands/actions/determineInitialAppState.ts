import { ArticleObject } from '../../types';
import { logger } from '../../lib';
import { isItForcedUpdate } from '../../helpers';

export const determineInitialAppState = (cachedArticle: ArticleObject | null) => {
  const isForcedUpdate = isItForcedUpdate();

  if (!cachedArticle) logger.verbose('Article cache is empty!');

  if (!cachedArticle && !isForcedUpdate) {
    logger.verbose("Exiting (pass '--skipCache' to force an update)");
    process.exit();
  } else if (isForcedUpdate) {
    logger.verbose('Proceeding despite empty cache...');
  }
};
