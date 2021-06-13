import { generatePostContent } from '../../../src/helpers/articles';

describe('compareArticles', () => {
  const article = {
    feedUpdateDate: '2021-06-04T11:20:42Z',
    date: '2021-06-04T11:20:42Z',
    title: 'sample_title_1',
    url: 'sample_url_1',
  };

  it('should generate status post content for a given article', () => {
    expect(generatePostContent(article)).toMatchSnapshot();
  });
});
