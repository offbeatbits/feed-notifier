describe("Twitter client config", () => {
  it("should export Twitter config", () => {
    expect(require("../../../src/config/clients/twitter")).toMatchSnapshot(); // eslint-disable-line
  });
});
