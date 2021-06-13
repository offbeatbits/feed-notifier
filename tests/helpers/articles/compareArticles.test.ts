import { compareArticles } from '../../../src/helpers/articles';

describe('compareArticles', () => {
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

  it('should return true for identical articles', () => {
    expect(compareArticles({
      oldArticle: article1,
      newArticle: article1,
    })).toBe(true);
  });

  it('should return true when skip param is provided', () => {
    expect(compareArticles({
      oldArticle: article1,
      newArticle: article2,
      skip: true,
    })).toBe(true);
  });

  it('should return false when one of the articles is empty', () => {
    expect(compareArticles({
      oldArticle: article1,
      newArticle: {} as any,
    })).toBe(false);
  });

  it('should return false when both articles is empty', () => {
    expect(compareArticles({
      oldArticle: {} as any,
      newArticle: {} as any,
    })).toBe(false);
  });

  it('should return false when both articles are null', () => {
    expect(compareArticles({
      oldArticle: null,
      newArticle: null,
    })).toBe(false);
  });
});
