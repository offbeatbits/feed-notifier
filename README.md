# feed-notifier
[![Build status](https://ci.appveyor.com/api/projects/status/rg8e93vtapqm4qj7/branch/master?svg=true)](https://ci.appveyor.com/project/lwojcik/feed-notifier/branch/master)
[![codecov](https://codecov.io/gh/offbeatbits/feed-notifier/branch/master/graph/badge.svg?token=z4HlY3ZRAm)](https://codecov.io/gh/offbeatbits/feed-notifier)

Node.js script monitoring external RSS / Atom feed and posting status updates to social media services when it detects a change.

Currently supports Twitter and Mastodon.

## Install

```bash
git clone https://github.com/offbeatbits/feed-notifier.git
cd feed-notifier
npm install
npm run build
```

## Configuration

See `.env.sample` for environment variables required to run the script. Note that posting on Twitter and Mastodon requires OAuth app credentials.

You can enable two levels of logging (basic and verbose) by setting `FN_LOGGING_ENABLE` and / or `FN_LOGGING_VERBOSE_ENABLE` to `'true'`.

Each social media channel can be toggled individually by setting `FN_TWITTER_ENABLE` and / or `FN_MASTODON_ENABLE` to `'true'` or `'false'`.

## Usage

First run must be done with `--initialize` flag in order to hydrate article cache:

```bash
cd feed-notifier
npm start --initialize
```

The script won't attempt posting on social media with empty article cache.

Each subsequent run can be done in the following way (manually or via cron):

```bash
cd feed-notifier
npm start
// or
node dist/index.js
```

The script will publish on social media only if it detects new article in the RSS feed it monitors.

You can also skip article cache and force the script to post an update (even with empty article cache) by passing `--skipcache` flag:


```bash
cd feed-notifier
npm start -- --skipcache
```

## License

Licensed under MIT License. See [LICENSE](https://github.com/offbeatbits/feed-notifier/blob/master/LICENSE) for more information.
