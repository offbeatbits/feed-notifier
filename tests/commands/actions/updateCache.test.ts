import { updateArticleCache } from '../../../src/helpers/articles/updateArticleCache';
import { updateCache } from '../../../src/commands/actions/updateCache';

jest.mock('../../../src/helpers/articles/updateArticleCache');

describe('updateCache', () => {
  const article = {
    feedUpdateDate: '2021-06-04T11:20:42Z',
    date: '2021-06-04T11:20:42Z',
    title: 'sample_title_1',
    url: 'sample_url_1',
  };

  it('should update cache with new article', () => {
    updateCache(article);
    expect(updateArticleCache).toHaveBeenCalledWith(article);
  });
});
