import axios from '../../util/axios';

const search = async (query: string) => {
  const { data } = await axios.get(
    `subreddits/search.json?q=${query}&include_over_18=on`,
  );
  return data;
};

export default search;
