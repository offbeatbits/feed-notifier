import { OAuth2Service } from '../models';
import { TwitterServiceSettings } from '../types';

export class TwitterService extends OAuth2Service {
  username: string;

  constructor({
    username,
    client,
  }: TwitterServiceSettings) {
    super(client);
    this.username = username;
  }

  // authorize

  // post
}
