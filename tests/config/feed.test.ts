describe("Feed config", () => {
  it("should export feed config", () => {
    expect(require("../../src/config/feed")).toMatchSnapshot(); // eslint-disable-line
  });
});
