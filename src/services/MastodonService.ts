// import generator, {
//   MegalodonInterface,
// } from 'megalodon';
import { OAuth2Service } from '../models';
import { MastodonServiceSettings } from '../types';

/* eslint-disable class-methods-use-this */

export class MastodonService extends OAuth2Service {
  username: string;

  host: string;

  // private mastodonClient: MegalodonInterface;

  constructor({
    username,
    host,
    settings,
  }: MastodonServiceSettings) {
    super(settings);
    this.username = username;
    this.host = host;
    // this.mastodonClient = generator(
    //   'mastodon',
    //   this.host,
    //   this.accessToken,
    // );
  }

  testMethod() {
    console.log('test method from MastodonService!'); // eslint-disable-line
  }

  authorize() {
    console.log(`authorizing...`); // eslint-disable-line

  }

  async post(content: string) {
    console.log(`tooting ${content}...`); // eslint-disable-line
    // const response = await this.mastodonClient.postStatus(content);
    // return response;
  }
}
