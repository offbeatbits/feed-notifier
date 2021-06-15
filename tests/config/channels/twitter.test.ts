describe('Twitter config', () => {
  it('should export Twitter config', () => {
    expect(require('../../../src/config/channels/twitter')).toMatchSnapshot(); // eslint-disable-line
  });
});
