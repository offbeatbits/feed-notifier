import { getChannelConfigArray } from '../../../src/helpers/channels/getChannelConfigArray';

import {
  ChannelConfig,
  ChannelSettings,
  OAuth2ServiceSettings,
} from '../../../src/types';

const sampleChannels = {
  sampleChannel1: {
    foo: 'bar1',
    bar: 'baz1',
  },
  sampleChannel2: {
    foo: 'bar2',
    bar: 'baz2',
  },
} as unknown as ChannelConfig<ChannelSettings>;

const sampleClients = {
  sampleChannel1: {
    foo: 'bar1',
    bar: 'baz1',
  },
  sampleChannel2: {
    foo: 'bar2',
    bar: 'baz2',
  },
} as unknown as ChannelConfig<OAuth2ServiceSettings>;

describe('getChannelConfigArray', () => {
  it('should return channel config array', () => {
    expect(getChannelConfigArray(sampleChannels, sampleClients)).toMatchSnapshot();
  });
});
