export interface OAuth2ServiceSettings {
  key: string;
  secret: string;
  accessToken?: string;
  accessTokenSecret?: string;
}

export interface CommonServiceSettings {
  enabled: boolean;
}
export interface TwitterSettings extends CommonServiceSettings {
  username: string;
}

export interface MastodonSettings extends CommonServiceSettings {
  username: string;
  host: string;
}

export interface MauticSettings extends CommonServiceSettings {
  url: string;
  username: string;
  password: string;
}

export type ChannelSettings =
  TwitterSettings
  | MastodonSettings
  | MauticSettings;

export interface ClientSettings {
  settings: OAuth2ServiceSettings;
}

export type ChannelName = 'twitter' | 'mastodon' | 'mautic';

export type ChannelConfig<T> = Record<ChannelName, T>;

export interface TwitterServiceSettings extends TwitterSettings, ClientSettings {}

export interface MastodonServiceSettings extends MastodonSettings, ClientSettings {}

export interface MauticServiceSettings extends MauticSettings {}

export type ServiceSettings =
  TwitterServiceSettings
  | MastodonServiceSettings
  | MauticServiceSettings;

export type ServiceClassSettings =
  ChannelSettings & {
    client: OAuth2ServiceSettings
  };

export type ChannelConfigRecord = {
  type: ChannelName;
  settings: ServiceClassSettings;
};

export interface ArticleObject {
  feedUpdateDate: string;
  date: string;
  title: string;
  url: string;
}

export type ChannelConfigArray = Array<ChannelConfigRecord>;
