describe('Mastodon config', () => {
  it('should export Mastodon config', () => {
    expect(require('../../../src/config/channels/mastodon')).toMatchSnapshot(); // eslint-disable-line
  });
});
