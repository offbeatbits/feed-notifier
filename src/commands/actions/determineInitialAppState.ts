import { ArticleObject } from "../../types";
import { logger } from "../../lib";
import { isItForcedUpdate, isItInitialization } from "../../helpers";

export const determineInitialAppState = (
  cachedArticle: ArticleObject | null
) => {
  logger.info("Update process started!");
  const isForcedUpdate = isItForcedUpdate();
  const isInitialization = isItInitialization();
  if (!cachedArticle) logger.verbose("Article cache is empty!");

  if (isForcedUpdate && isInitialization) {
    logger.verbose(
      "Detected '--skipCache' and '--initialize' passed at once. Make up your mind, please? :)"
    );
    return false;
  }
  if (!cachedArticle && !isForcedUpdate && !isInitialization) {
    logger.verbose(
      "Exiting (pass '--skipCache' to force an update or '--initialize' to generate cache)"
    );
    return false;
  }
  if (isForcedUpdate) {
    logger.verbose("Proceeding despite empty cache...");
    return true;
  }
  return true;
};
