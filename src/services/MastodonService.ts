import { OAuth2Service } from '../models';
import { MastodonServiceSettings } from '../types';

export class MastodonService extends OAuth2Service {
  username: string;

  host: string;

  constructor({
    username,
    host,
    client,
  }: MastodonServiceSettings) {
    super(client);
    this.username = username;
    this.host = host;
  }

  // authorize

  // post
}
