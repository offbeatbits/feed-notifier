import { serviceMappings } from '../config';
import {
  ChannelName,
  ServiceSettings,
} from '../types';

export const createService = (
  type: ChannelName,
  settings: ServiceSettings,
) =>
  new (serviceMappings[type] as any)(settings); // oof
