import Parser from 'rss-parser';

export class Feed {
  url: string;

  private content: any;

  constructor(url: string) {
    this.url = url;
  }

  async fetch() {
    this.content = await new Parser().parseURL(this.url);
    return this;
  }

  getLatestPostDate() {
    return this.content.items[0].pubDate;
  }

  getLatestPostTitle() {
    return this.content.items[0].title;
  }

  getLatestPostUrl() {
    return this.content.items[0].link;
  }

  getLatestPostId() {
    return this.content.items[0].id;
  }
}
