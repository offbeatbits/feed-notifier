import { logger } from "../../lib/logger";
import { ArticleObject } from "../../types.d";

export const generatePostContent = (article: ArticleObject) => {
  const content = `${article.title} ${article.url}`;
  logger.verbose(`Status content: ${content}`);
  return content;
};
