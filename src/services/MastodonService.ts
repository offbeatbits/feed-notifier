import { OAuth2Service } from '../models';
import { MastodonServiceSettings } from '../types';

/* eslint-disable class-methods-use-this */

export class MastodonService extends OAuth2Service {
  username: string;

  host: string;

  constructor({
    username,
    host,
    settings,
  }: MastodonServiceSettings) {
    super(settings);
    this.username = username;
    this.host = host;
  }

  testMethod() {
    console.log('test method from MastodonService!'); // eslint-disable-line
  }

  // authorize

  // post
}
