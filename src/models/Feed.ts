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
    this.content = await new Parser({
      customFields: {
        feed: ['lastBuildDate'],
      },
    }).parseURL(this.url) as FeedContent;
    return this;
  }

  getFeedUpdateDate() {
    return this.content!.lastBuildDate;
  }

  getLatestPostDate() {
    return this.content!.items[0].pubDate;
  }

  getLatestPostTitle() {
    return this.content!.items[0].title;
  }

  getLatestPostUrl() {
    return this.content!.items[0].link;
  }
}
