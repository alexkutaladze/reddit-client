import axios from '../../util/axios';

export type Time = 'hour' | 'day' | 'week' | 'month' | 'year' | 'all';

export const getSubredditPosts = async (
  subreddit: string,
  sortBy: string,
  t?: Time,
) => {
  const { data } = await axios.get(
    `r/${subreddit}/${sortBy}.json${t ? `?t=${t}` : ''}`,
  );

  return data;
};
