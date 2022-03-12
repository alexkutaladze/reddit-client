import { useQuery } from 'react-query';
import { getSubredditPosts } from './subreddit.api';
import { ISubreddit } from './subreddit.types';

const useSubredditPosts = (
  sub: string = 'programming',
  sortby: string = 'new',
) => {
  return useQuery<ISubreddit, Error>(
    `sub-${sub}-${sortby}`,
    () => getSubredditPosts(sub, sortby),
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    },
  );
};

export default useSubredditPosts;
