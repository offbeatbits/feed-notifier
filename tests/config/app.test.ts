describe("App config", () => {
  it("should export app config", () => {
    expect(require("../../src/config/app")).toMatchSnapshot(); // eslint-disable-line
  });
});
