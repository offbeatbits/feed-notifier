import { OAuth2ServiceSettings } from '../types';

export class OAuth2Service {
  key: string;

  secret: string;

  accessToken: string;

  constructor({
    key,
    secret,
    accessToken,
  }: OAuth2ServiceSettings) {
    this.key = key;
    this.secret = secret;
    this.accessToken = accessToken || '';
  }

  // authorize

  // post
}
