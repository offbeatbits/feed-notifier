import { ArticleObject } from "../../types.d";
import { logger } from "../../lib";
import { areArticlesDifferent, isItForcedUpdate } from "../../helpers";

export const determineUpdateState = (
  oldArticle: ArticleObject | null,
  newArticle: ArticleObject | null
) => {
  const skip = isItForcedUpdate();

  const isUpdateNeeded = areArticlesDifferent({
    oldArticle,
    newArticle,
    skip,
  });

  logger.info(`Update needed: ${isUpdateNeeded}`);
  return isUpdateNeeded;
};
