import { updateAllChannels } from "../../../src/commands/update/allChannels";

const sampleChannels = {
  sampleChannel1: {
    foo: "bar1",
    bar: "baz1",
  },
  sampleChannel2: {
    foo: "bar2",
    bar: "baz2",
  },
};

const sampleClients = {
  sampleChannel1: {
    foo: "bar1",
    bar: "baz1",
  },
  sampleChannel2: {
    foo: "bar2",
    bar: "baz2",
  },
};

const testUpdateArgs = {
  channels: sampleChannels,
  clients: sampleClients,
  updateFn: () => jest.fn(),
  content: "test message",
};

describe("updateAllChannels", () => {
  it("should update all channels", () => {
    expect(() => updateAllChannels(testUpdateArgs as any)).not.toThrow();
  });
});
