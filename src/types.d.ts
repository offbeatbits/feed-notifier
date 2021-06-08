export interface OAuth2ServiceSettings {
  key: string;
  secret: string;
  accessToken?: string;
}

export interface TwitterSettings {
  username: string;
}

export interface MastodonSettings {
  username: string;
  host: string;
}

export type ChannelSettings = TwitterSettings | MastodonSettings;

export interface ClientSettings {
  client: OAuth2ServiceSettings;
}

export type ChannelName = 'twitter' | 'mastodon';

export type ChannelConfig<T> = Record<ChannelName, T>;

export interface TwitterServiceSettings extends TwitterSettings, ClientSettings {}

export interface MastodonServiceSettings extends MastodonSettings, ClientSettings {}

export type ServiceSettings = TwitterServiceSettings | MastodonServiceSettings;

export type ServiceClassSettings =
  Record<ChannelName, ServiceSettings>;

export type ChannelConfigRecord = {
  type: ChannelName;
} & ChannelSettings & OAuth2ServiceSettings;

export type ChannelConfigArray = Array<ChannelConfigRecord>;
