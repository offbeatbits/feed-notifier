import { OAuthService } from '../models';
import { TwitterServiceSettings } from '../types';

export class TwitterService extends OAuthService {
  username: string;

  constructor(settings: TwitterServiceSettings) {
    super(settings.client);
    this.username = settings.username;
  }
}
