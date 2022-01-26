import { serviceMappings } from "../../src/config/serviceMappings";

describe("Service mappings", () => {
  it("should map channels to services", () => {
    expect(serviceMappings).toMatchSnapshot();
  });
});
