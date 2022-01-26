describe("Mastodon client config", () => {
  it("should export Mastodon config", () => {
    expect(require("../../../src/config/clients/mastodon")).toMatchSnapshot(); // eslint-disable-line
  });
});
