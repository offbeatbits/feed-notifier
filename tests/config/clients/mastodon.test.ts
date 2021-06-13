import dotenv from 'dotenv';
import path from 'path';

describe('Mastodon client config', () => {
  dotenv.config({
    path: path.resolve(process.cwd(), '.env.testing'),
  });

  it('should export Mastodon config', () => {
    expect(require('../../../src/config/clients/mastodon')).toMatchSnapshot(); // eslint-disable-line
  });
});
