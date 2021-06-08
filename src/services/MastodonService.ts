import { OAuthService } from '../models';
import { MastodonServiceSettings } from '../types';

export class MastodonService extends OAuthService {
  username: string;

  host: string;

  constructor(settings: MastodonServiceSettings) {
    super(settings.client);
    this.username = settings.username;
    this.host = settings.host;
  }
}
