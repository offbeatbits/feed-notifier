import { boolean } from "../../utils";
import { MastodonSettings } from "../../types.d";

const { env } = process;

export const mastodon: MastodonSettings = {
  enabled: boolean(env.FN_MASTODON_ENABLE),
  username: env.FN_MASTODON_USERNAME!,
  host: env.FN_MASTODON_HOST!,
};
