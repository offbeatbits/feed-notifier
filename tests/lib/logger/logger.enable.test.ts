import mockConsole from "jest-mock-console";
/* eslint-disable no-console */
import { logger } from "../../../src/lib/logger";

jest.mock("../../../src/config/app", () => ({
  enableLogging: true,
  enableVerboseLogging: true,
}));

describe("Logger (enabled)", () => {
  it("info should call console.log if enableLogging is set to true", () => {
    const restoreConsole = mockConsole();
    const testMessage = "Test message";
    logger.info(testMessage);
    // eslint-disable-next-line jest/prefer-called-with
    expect(console.log).toHaveBeenCalledWith(`[info] ${testMessage}`);
    restoreConsole();
  });

  it("verbose should call console.log if enableVerbose is set to true", () => {
    const restoreConsole = mockConsole();
    const testMessage = "Test message";
    logger.verbose(testMessage);
    // eslint-disable-next-line jest/prefer-called-with
    expect(console.log).toHaveBeenCalledWith(`[verbose] ${testMessage}`);
    restoreConsole();
  });
});
