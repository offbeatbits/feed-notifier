/* eslint-disable class-methods-use-this */
import MauticConnector from 'node-mautic';
import { MauticServiceSettings } from '../types';

export class MauticService {
  url: string;

  username: string;

  password: string;

  private mauticClient: MauticConnector;

  constructor({
    url,
    username,
    password,
  }: MauticServiceSettings) {
    this.url = url;
    this.username = username;
    this.password = password;
    this.mauticClient = new MauticConnector({
      apiUrl: this.url,
      username: this.username,
      password: this.password,
      timeoutInSeconds: 20,
    });
  }

  async post(/* content: string */) {
    console.log(this.mauticClient); // eslint-disable-line
    return 'mautic service response';
  }
}
