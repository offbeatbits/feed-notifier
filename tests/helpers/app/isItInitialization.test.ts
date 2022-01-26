import mockArgv from "mock-argv";
import { isItInitialization } from "../../../src/helpers/app";
import { initArgs } from "../../../src/config/initArgs";

describe("isItInitialization", () => {
  initArgs.forEach((arg) => {
    it(`should return true when ${arg} flag is present`, () => {
      mockArgv([arg], async () => {
        expect(isItInitialization()).toBe(true);
      });
    });
  });

  it("should return false when no force flags are present", () => {
    mockArgv([], async () => {
      expect(isItInitialization()).toBe(false);
    });
  });
});
