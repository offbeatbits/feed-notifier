import { OAuth2ServiceSettings } from '../types';

export class OAuth2Service {
  key: string;

  secret: string;

  accessToken: string;

  constructor(settings: OAuth2ServiceSettings) {
    this.key = settings.key;
    this.secret = settings.secret;
    this.accessToken = settings.accessToken || '';
  }

  // authorize

  // post
}
