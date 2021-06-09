/* eslint-disable class-methods-use-this */
// import { TwitterClient } from 'twitter-api-client';
import { OAuth2Service } from '../models';
import { TwitterServiceSettings } from '../types';

export class TwitterService extends OAuth2Service {
  username: string;

  // private twitterClient: TwitterClient;

  constructor({
    username,
    settings,
  }: TwitterServiceSettings) {
    super(settings);
    this.username = username;
    // this.twitterClient = new TwitterClient({
    //   apiKey: this.key,
    //   apiSecret: this.secret,
    //   accessToken: this.accessToken,
    //   accessTokenSecret: this.accessTokenSecret,
    // });
  }

  testMethod() {
    console.log('test method from TwitterService!'); // eslint-disable-line
  }

  // authorize

  authorize() {
    console.log(`authorizing...`); // eslint-disable-line
  }

  async post(content: string) {
    console.log(`tweeting ${content}...`); // eslint-disable-line
    // const response = await this.twitterClient.tweets.statusesUpdate({
    //   status: content,
    // });
    // return response;
  }

  // post
}
