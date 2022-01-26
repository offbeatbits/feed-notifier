import { Feed } from "../../models";

export const fetchFeed = (url: string) => new Feed(url).fetch();
