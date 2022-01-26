/* eslint-disable @typescript-eslint/no-unused-vars */
import { start } from "../../src/commands/start";
import { isItInitialization } from "../../src/helpers";
import {
  determineInitialAppState,
  determineUpdateState,
} from "../../src/commands/actions";

jest.mock("../../src/config/index");
jest.mock("../../src/helpers/index");
jest.mock("../../src/helpers/app/isItInitialization");
jest.mock("../../src/commands/actions/index");
jest.mock("../../src/commands/actions/determineInitialAppState");

describe("start", () => {
  it("should start the update", () => {
    expect(async () => start()).not.toThrow();
  });

  it("should determine initial app state", () => {
    (determineInitialAppState as any) = () => true;
    expect(async () => start()).not.toThrow();
  });

  it("should start the update in initialization mode", () => {
    (isItInitialization as any) = () => true;
    expect(async () => start()).not.toThrow();
  });

  it("should detect if update is needed", () => {
    (isItInitialization as any) = () => false;
    (determineUpdateState as any) = () => true;
    expect(async () => start()).not.toThrow();
  });
});
