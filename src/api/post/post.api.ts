import axios from '../../util/axios';

export const getPost = async (permalink: string) => {
  const { data } = await axios.get(permalink);
  return data;
};
