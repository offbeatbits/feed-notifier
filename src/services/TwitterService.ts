/* eslint-disable class-methods-use-this */
import { OAuth2Service } from '../models';
import { TwitterServiceSettings } from '../types';

export class TwitterService extends OAuth2Service {
  username: string;

  constructor({
    username,
    settings,
  }: TwitterServiceSettings) {
    super(settings);
    this.username = username;
  }

  testMethod() {
    console.log('test method from TwitterService!'); // eslint-disable-line
  }

  // authorize

  // post
}
