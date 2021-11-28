import { fetchFeed } from '../../../src/helpers/feed/fetchFeed';

jest.mock('rss-parser', () => jest.fn().mockImplementation(() => ({
  parseURL: () => Promise.resolve({
    content: {
      lastBuildDate: 'mocked_last_build_date',
    },
    lastBuildDate: 'mocked_last_build_date',
    items: [
      {
        pubDate: 'mocked_last_item_pub_date',
        title: 'mocked_last_item_title',
        link: 'mocked_last_item_link',
      },
    ],
  }),
})));

describe('fetchFeed', () => {
  it('should fetch feed', async () => {
    expect.assertions(1);
    await expect(fetchFeed('sample_url')).toMatchSnapshot();
  });
});
