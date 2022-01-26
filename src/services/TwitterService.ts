/* eslint-disable class-methods-use-this */
import { TwitterClient } from "twitter-api-client";
import { OAuth2Service } from "../models";
import { TwitterServiceSettings } from "../types.d";

export class TwitterService extends OAuth2Service {
  username: string;

  private twitterClient: TwitterClient;

  constructor({ username, settings }: TwitterServiceSettings) {
    super(settings);
    this.username = username;
    this.twitterClient = new TwitterClient({
      apiKey: this.key,
      apiSecret: this.secret,
      accessToken: this.accessToken,
      accessTokenSecret: this.accessTokenSecret,
    });
  }

  async post(content: string) {
    const response = await this.twitterClient.tweets.statusesUpdate({
      status: content,
    });
    return `https://twitter.com/${this.username}/status/${response.id_str}`;
  }
}
