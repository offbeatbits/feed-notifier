import { logger } from "../../lib/logger";
import { ArticleObject } from "../../types";

const areStringsDifferent = (
  someString: string | null | undefined,
  otherString: string | null | undefined
) => {
  if (someString && otherString) {
    return someString.localeCompare(otherString) !== 0;
  }
  return false;
};

const areDatesDifferent = (
  oldDate: string | null | undefined,
  newDate: string | null | undefined
) => {
  if (oldDate && newDate) {
    return (
      new Date(oldDate!).getTime() !== new Date(newDate).getTime() ||
      Boolean(oldDate)
    );
  }
  return false;
};

interface ArticlesToCompare {
  oldArticle: ArticleObject | null | undefined;
  newArticle: ArticleObject | null | undefined;
  skip?: boolean;
}

export const areArticlesDifferent = ({
  oldArticle,
  newArticle,
  skip,
}: ArticlesToCompare) => {
  if (skip) {
    logger.verbose("Skipping article comparison due to 'skipCache' flag...");
    return true;
  }

  logger.verbose("Comparing articles...");

  const titleIsDifferent = areStringsDifferent(
    oldArticle?.title,
    newArticle?.title
  );

  logger.verbose(`Article title is different: ${titleIsDifferent}`);

  const urlIsDifferent = areStringsDifferent(oldArticle?.url, newArticle?.url);

  logger.verbose(`Article URL is different: ${urlIsDifferent}`);

  const articleDateIsLater = areDatesDifferent(
    oldArticle?.date,
    newArticle?.date
  );

  logger.verbose(`Article date is later: ${articleDateIsLater}`);

  const feedUpdateDateIsLater = areDatesDifferent(
    oldArticle?.feedUpdateDate,
    newArticle?.feedUpdateDate
  );

  logger.verbose(`Feed build date is later: ${feedUpdateDateIsLater}`);

  const result =
    titleIsDifferent &&
    urlIsDifferent &&
    articleDateIsLater &&
    feedUpdateDateIsLater;

  logger.verbose(`Articles are different: ${result}`);

  return result;
};
