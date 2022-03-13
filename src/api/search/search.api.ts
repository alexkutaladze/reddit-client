import axios from '../../util/axios';

const search = async (query: string) => {
  const { data } = await axios.get(`subreddits/search.json?q=${query}`);
  return data;
};

export default search;
