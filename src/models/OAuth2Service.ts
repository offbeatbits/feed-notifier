import { OAuth2ServiceSettings } from "../types.d";

export abstract class OAuth2Service {
  key: string;

  secret: string;

  accessToken: string | undefined;

  accessTokenSecret: string | undefined;

  constructor({
    key,
    secret,
    accessToken,
    accessTokenSecret,
  }: OAuth2ServiceSettings) {
    this.key = key;
    this.secret = secret;
    this.accessToken = accessToken;
    this.accessTokenSecret = accessTokenSecret;
  }

  abstract post(content: string): void;
}
