import { Feed } from '../../models';

export const fetch = async (url: string) => {
  const feed = await new Feed(url).fetch();
  return feed;
};
