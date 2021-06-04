export interface ServiceDriver {
  authorize: () => Promise<unknown>;
  post: () => Promise<unknown>;
}
