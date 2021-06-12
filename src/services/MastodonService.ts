import generator, {
  MegalodonInterface,
} from 'megalodon';
import { OAuth2Service } from '../models';
import { MastodonServiceSettings } from '../types';

export class MastodonService extends OAuth2Service {
  username: string;

  host: string;

  private mastodonClient: MegalodonInterface;

  constructor({
    username,
    host,
    settings,
  }: MastodonServiceSettings) {
    super(settings);
    this.username = username;
    this.host = host;
    this.mastodonClient = generator(
      'mastodon',
      this.host,
      this.accessToken,
    );
  }

  async post(content: string) {
    const response = await this.mastodonClient.postStatus(content);
    return response.data.uri;
  }
}
