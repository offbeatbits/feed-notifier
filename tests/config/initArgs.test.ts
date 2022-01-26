import { initArgs } from "../../src/config/initArgs";

describe("Init args", () => {
  it("should export array of initialization arguments", () => {
    expect(initArgs).toMatchSnapshot();
  });
});
