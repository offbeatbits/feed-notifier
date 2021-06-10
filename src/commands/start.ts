import {
  channels,
  clients,
  feedUrl,
} from '../config';

import {
  getCachedArticle,
  getLatestArticle,
} from '../helpers';

import {
  determineInitialAppState,
  determineUpdateState,
  prepareUpdate,
  postTheUpdate,
  updateCache,
  finishUpdate,
} from './actions';

export const start = async () => {
  const cachedArticle = getCachedArticle();

  determineInitialAppState(cachedArticle);

  const latestArticle = await getLatestArticle(feedUrl);

  determineUpdateState(cachedArticle, latestArticle);

  const content = prepareUpdate(latestArticle!);

  postTheUpdate({
    channels,
    clients,
    content,
  });

  updateCache(latestArticle);

  finishUpdate();
};
