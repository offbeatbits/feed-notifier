import { logger } from "../../../src/lib/logger";
import { finishUpdate } from "../../../src/commands/actions/finishUpdate";

jest.mock("../../../src/lib/logger");

describe("finishUpdate", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should detect when initialization was finished", () => {
    finishUpdate(true);
    expect(logger.info).toHaveBeenCalledWith("Initialization done!");
  });

  it("should detect when update is finished", () => {
    finishUpdate();
    expect(logger.info).toHaveBeenCalledWith("Update done!");
  });
});
