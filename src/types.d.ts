export interface OAuthServiceSettings {
  key: string;
  secret: string;
  accessToken?: string;
}

export interface ServiceSettings {
  username: string;
  client: OAuthServiceSettings;
}

export interface TwitterServiceSettings extends ServiceSettings {}
export interface MastodonServiceSettings extends ServiceSettings {
  host: string;
}
