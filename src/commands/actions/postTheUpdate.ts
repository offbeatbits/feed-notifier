import { logger } from "../../lib";

import { updateAllChannels, updateSingleChannel } from "../update";

import {
  ChannelConfig,
  OAuth2ServiceSettings,
  ChannelSettings,
} from "../../types";

interface UpdateParams {
  channels: ChannelConfig<ChannelSettings>;
  clients: ChannelConfig<OAuth2ServiceSettings>;
  content: string;
}

export const postTheUpdate = ({ channels, clients, content }: UpdateParams) => {
  logger.verbose("Posting on channels...");

  updateAllChannels({
    channels,
    clients,
    updateFn: updateSingleChannel,
    content,
  });
};
