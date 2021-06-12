import {
  channels,
  clients,
  feedUrl,
} from '../config';

import {
  getCachedArticle,
  getLatestArticle,
  isItInitialization,
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
  const isInitialization = isItInitialization();
  const latestArticle = await getLatestArticle(feedUrl);

  determineInitialAppState(cachedArticle);

  if (isInitialization) {
    updateCache(latestArticle);
    finishUpdate(isInitialization);
  } else {
    determineUpdateState(cachedArticle, latestArticle);

    const content = prepareUpdate(latestArticle!);

    postTheUpdate({
      channels,
      clients,
      content,
    });

    updateCache(latestArticle);

    finishUpdate();
  }
};
