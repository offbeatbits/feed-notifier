import { determineUpdateState } from '../../../src/commands/actions/determineUpdateState';

describe('determineUpdateState', () => {
  const article1 = {
    feedUpdateDate: '2021-06-04T11:20:42Z',
    date: '2021-06-04T11:20:42Z',
    title: 'sample_title_1',
    url: 'sample_url_1',
  };

  const article2 = {
    feedUpdateDate: '2021-07-04T11:20:42Z',
    date: '2021-07-04T11:20:42Z',
    title: 'sample_title_2',
    url: 'sample_url_2',
  };

  it('should return true for new article being different', () => {
    expect(determineUpdateState(article1, article2)).toBe(true);
  });

  it('should return false for new article being the same as the old one', () => {
    expect(determineUpdateState(article1, article1)).toBe(false);
  });
});
