import { forceArgs } from "../../src/config/forceArgs";

describe("Force args", () => {
  it("should export array of force arguments", () => {
    expect(forceArgs).toMatchSnapshot();
  });
});
