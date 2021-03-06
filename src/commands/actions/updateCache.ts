import { ArticleObject } from "../../types.d";
import { logger } from "../../lib";
import { updateArticleCache } from "../../helpers";

export const updateCache = (latestArticle: ArticleObject | null) => {
  logger.verbose("Updating article cache...");

  return updateArticleCache(latestArticle);
};
