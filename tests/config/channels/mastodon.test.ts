// import dotenv from 'dotenv';
// import path from 'path';

describe('Mastodon config', () => {
  // dotenv.config({
  //   path: path.resolve(process.cwd(), '.env.testing'),
  // });

  it('should export Mastodon config', () => {
    expect(require('../../../src/config/channels/mastodon')).toMatchSnapshot(); // eslint-disable-line
  });
});
