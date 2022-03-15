import axios from '../../util/axios';

export type Time = 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';

export const getSubredditPosts = async (
  subreddit: string,
  sortBy: string,
  t?: Time,
) => {
  const { data } = await axios.get(
    `r/${subreddit}/${sortBy}.json?raw_json=1${t ? `&t=${t}` : ''}`,
  );

  return data;
};
