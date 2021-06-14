import { prepareUpdate } from '../../../src/commands/actions/prepareUpdate';

describe('prepareUpdate', () => {
  const article = {
    feedUpdateDate: '2021-06-04T11:20:42Z',
    date: '2021-06-04T11:20:42Z',
    title: 'prepared_sample_title_1',
    url: 'prepared_sample_url_1',
  };

  it('should prepare new article for update', () => {
    expect(prepareUpdate(article)).toMatchSnapshot();
  });
});
