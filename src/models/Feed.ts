import Parser from 'rss-parser';

interface FeedItem {
  title: string;
  pubDate: string;
  link: string;
  id: string;
}

interface FeedContent {
  lastBuildDate: string;
  items: Array<FeedItem>;
}

export class Feed {
  url: string;

  private content: FeedContent | undefined;

  constructor(url: string) {
    this.url = url;
  }

  async fetch() {
    const feedContent = await new Parser({
      customFields: {
        feed: ['lastBuildDate'],
      },
    }).parseURL(this.url) as FeedContent;
    this.content = feedContent;
    return this as Feed;
  }

  private getFeed() {
    return this.content!;
  }

  private getLatestItem() {
    return this.getFeed().items[0] as FeedItem;
  }

  getFeedUpdateDate() {
    return this.getFeed().lastBuildDate;
  }

  getLatestPostDate() {
    return this.getLatestItem().pubDate;
  }

  getLatestPostTitle() {
    return this.getLatestItem().title;
  }

  getLatestPostUrl() {
    return this.getLatestItem().link;
  }
}
