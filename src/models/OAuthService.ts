import { OAuthServiceSettings } from '../types';

export class OAuthService {
  key: string;

  secret: string;

  accessToken: string;

  constructor(settings: OAuthServiceSettings) {
    this.key = settings.key;
    this.secret = settings.secret;
    this.accessToken = settings.accessToken || '';
  }
}
