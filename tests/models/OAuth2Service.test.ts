import { OAuth2Service } from '../../src/models/OAuth2Service';

class SampleService extends OAuth2Service {
  // eslint-disable-next-line class-methods-use-this
  post() {
    return Promise.resolve('posted mocked content');
  }
}

describe('OAuth2Service', () => {
  const sampleService = new SampleService({
    key: 'sample_mocked_key',
    secret: 'sample_mocked_secret',
    accessToken: 'sample_access_token',
    accessTokenSecret: 'sample_access_token_secret',
  });

  it('should be defined', () => {
    expect(OAuth2Service).toBeDefined();
  });

  it('should implement post function', () => {
    expect(sampleService.post).toBeDefined();
  });
});
