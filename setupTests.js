process.env.NODE_ENV = 'testing';
process.env.FN_FEED_URL = 'https://example.org/test_feed.xml';
process.env.FN_CACHE_DIRECTORY = 'test_cache_directory';
process.env.FN_LOGGING_ENABLE = 'false';
process.env.FN_LOGGING_VERBOSE_ENABLE = 'false';
process.env.FN_TWITTER_ENABLE = 'true';
process.env.FN_TWITTER_USERNAME = 'test_account';
process.env.FN_TWITTER_CLIENT_KEY = 'test_twitter_client_key';
process.env.FN_TWITTER_CLIENT_SECRET = 'test_twitter_client_secret';
process.env.FN_TWITTER_CLIENT_ACCESS_TOKEN = 'test_twitter_access_token';
process.env.FN_TWITTER_CLIENT_ACCESS_TOKEN_SECRET = 'test_twitter_access_token_secret';
process.env.FN_MASTODON_ENABLE = 'true';
process.env.FN_MASTODON_HOST = 'https://mastodon.test.example.org';
process.env.FN_MASTODON_USERNAME = 'test_account';
process.env.FN_MASTODON_CLIENT_KEY = 'test_mastodon_client_key';
process.env.FN_MASTODON_CLIENT_SECRET = 'test_mastodon_client_secret';
process.env.FN_MASTODON_ACCESS_TOKEN = 'test_mastodon_access_token';

// require('dotenv').config({
//   debug: process.env.DEBUG,
//   path: '.env.testing',
// });

process.exit = () => {};
