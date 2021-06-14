import { createService } from '../../../src/helpers/services/createService';
import { updateSingleChannel } from '../../../src/commands/update/singleChannel';

jest.mock('../../../src/helpers/services/createService', () => ({
  __esModule: true,
  createService: jest.fn().mockImplementation(() => ({
    post: () => Promise.resolve('sample_status_url'),
  })),
}));

const sampleService = {
  type: 'twitter',
  settings: {
    enabled: true,
    foo: 'bar',
  },
};

const sampleDisabledService = {
  type: 'twitter',
  settings: {
    enabled: false,
    foo: 'bar',
  },
};

describe('updateSingleChannel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should update a channel', async () => {
    expect.assertions(1);
    await updateSingleChannel(sampleService as any, 'sample status');
    expect(createService).toHaveBeenCalledTimes(1);
  });

  it('should not update a channel if disabled', async () => {
    expect.assertions(1);
    await updateSingleChannel(sampleDisabledService as any, 'sample status');
    expect(createService).toHaveBeenCalledTimes(0);
  });
});
