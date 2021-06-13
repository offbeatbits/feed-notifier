import dotenv from 'dotenv';
import path from 'path';

describe('Twitter client config', () => {
  dotenv.config({
    path: path.resolve(process.cwd(), '.env.testing'),
  });

  it('should export Twitter config', () => {
    expect(require('../../../src/config/clients/twitter')).toMatchSnapshot(); // eslint-disable-line
  });
});
