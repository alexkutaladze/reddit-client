import axios from '../../util/axios';

export const getSubredditPosts = async (subreddit: string, sortBy: string) => {
  const { data } = await axios.get(`r/${subreddit}/${sortBy}.json`);

  return data;
};
