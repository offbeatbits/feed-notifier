import { areArticlesDifferent } from '../../../src/helpers/articles/areArticlesDifferent';

describe('areArticlesDifferent', () => {
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

  it('should return true for two different articles', () => {
    expect(areArticlesDifferent({
      oldArticle: article1,
      newArticle: article2,
    })).toBe(true);
  });

  it('should return false for two identical articles', () => {
    expect(areArticlesDifferent({
      oldArticle: article1,
      newArticle: article1,
    })).toBe(false);
  });

  it('should return true when skip param is provided', () => {
    expect(areArticlesDifferent({
      oldArticle: article1,
      newArticle: article2,
      skip: true,
    })).toBe(true);
  });

  it('should return false when one of the articles is empty', () => {
    expect(areArticlesDifferent({
      oldArticle: article1,
      newArticle: {} as any,
    })).toBe(false);
  });

  it('should return false when both articles is empty', () => {
    expect(areArticlesDifferent({
      oldArticle: {} as any,
      newArticle: {} as any,
    })).toBe(false);
  });

  it('should return false when both articles are null', () => {
    expect(areArticlesDifferent({
      oldArticle: null,
      newArticle: null,
    })).toBe(false);
  });
});
