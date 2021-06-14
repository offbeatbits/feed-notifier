import { logger } from '../../lib/logger';
import { fetchFeed } from '../feed';
import { ArticleObject } from '../../types';

export const getLatestArticle = async (feedUrl: string) => {
  logger.verbose('Getting latest article...');
  try {
    console.log(fetchFeed); // eslint-disable-line
    const feed = await fetchFeed(feedUrl);

    const article = {
      feedUpdateDate: feed.getFeedUpdateDate(),
      date: feed.getLatestPostDate(),
      title: feed.getLatestPostTitle(),
      url: feed.getLatestPostUrl(),
    } as ArticleObject;

    logger.verbose(`Feed update date: ${article.feedUpdateDate}`);
    logger.verbose(`Latest article date: ${article.date}`);
    logger.verbose(`Latest article title: ${article.title}`);
    logger.verbose(`Latest article URL: ${article.url}`);

    return article;
  } catch {
    logger.verbose('Something went wrong while fetching feed, returning null!');
    return null;
  }
};
