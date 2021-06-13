import dotenv from 'dotenv';
import path from 'path';

describe('Twitter config', () => {
  dotenv.config({
    path: path.resolve(process.cwd(), '.env.testing'),
  });

  it('should export Twitter config', () => {
    expect(require('../../../src/config/channels/twitter')).toMatchSnapshot(); // eslint-disable-line
  });
});
