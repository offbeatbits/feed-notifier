import { updateSingleChannel } from '../../../src/commands/update/singleChannel';
import { postTheUpdate } from '../../../src/commands/actions/postTheUpdate';

jest.mock('../../../src/commands/update/singleChannel');

const sampleChannels = {
  sampleChannel1: {
    foo: 'bar1',
    bar: 'baz1',
  },
  sampleChannel2: {
    foo: 'bar2',
    bar: 'baz2',
  },
};

const sampleClients = {
  sampleChannel1: {
    foo: 'bar1',
    bar: 'baz1',
  },
  sampleChannel2: {
    foo: 'bar2',
    bar: 'baz2',
  },
};

const postUpdateArgs = {
  channels: sampleChannels,
  clients: sampleClients,
  content: 'test message',
};

describe('postTheUpdate', () => {
  it('should post the update', () => {
    postTheUpdate(postUpdateArgs as any);
    expect(updateSingleChannel).toHaveBeenCalledTimes(2);
  });
});
