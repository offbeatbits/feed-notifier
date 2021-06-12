import { Feed } from '../../src/models/Feed';

jest.mock('rss-parser', () => jest.fn(() => ({
  postStatus: () => ({
    data: {
      uri: 'sample_uri_from_inline_megalodon_mock',
    },
  }),
})));

describe('Feed model', () => {
  const sampleFeed = new Feed('sample_feed_url');

  it('should be defined', () => {
    expect(Feed).toBeDefined();
  });

  it('should define fetch method', () => {
    expect(sampleFeed.fetch).toBeDefined();
  });

  it('should define getFeedUpdateDate method', () => {
    expect(sampleFeed.getFeedUpdateDate).toBeDefined();
  });

  it('should define getLatestPostDate method', () => {
    expect(sampleFeed.getLatestPostDate).toBeDefined();
  });

  it('should define getLatestPostTitle method', () => {
    expect(sampleFeed.getLatestPostTitle).toBeDefined();
  });

  it('should define getLatestPostUrl method', () => {
    expect(sampleFeed.getLatestPostUrl).toBeDefined();
  });
});

// import Parser from 'rss-parser';

// interface FeedItem {
//   title: string;
//   pubDate: string;
//   link: string;
//   id: string;
// }

// interface FeedContent {
//   lastBuildDate: string;
//   items: Array<FeedItem>;
// }

// export class Feed {
//   url: string;

//   private content: FeedContent | undefined;

//   constructor(url: string) {
//     this.url = url;
//   }

//   async fetch() {
//     this.content = await new Parser({
//       customFields: {
//         feed: ['lastBuildDate'],
//       },
//     }).parseURL(this.url) as FeedContent;
//     return this as Feed;
//   }

//   private getFeed() {
//     return this.content!;
//   }

//   private getLatestItem() {
//     return this.getFeed().items[0] as FeedItem;
//   }

//   getFeedUpdateDate() {
//     return this.getFeed().lastBuildDate;
//   }

//   getLatestPostDate() {
//     return this.getLatestItem().pubDate;
//   }

//   getLatestPostTitle() {
//     return this.getLatestItem().title;
//   }

//   getLatestPostUrl() {
//     return this.getLatestItem().link;
//   }
// }
