import { useQuery } from 'react-query';
import { getSubredditPosts, Time } from './subreddit.api';
import { ISubreddit } from './subreddit.types';

const useSubredditPosts = (
  sub: string = 'programming',
  sortby: string = 'new',
  timeRange?: Time,
) => {
  return useQuery<ISubreddit, Error>(
    `sub-${sub}-${sortby}`,
    () => getSubredditPosts(sub, sortby, timeRange),
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    },
  );
};

export default useSubredditPosts;
