import './lib/env';
import { update } from './actions';

console.log(process.env.MASTODON_USERNAME); // eslint-disable-line

update();
