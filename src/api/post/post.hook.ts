import { useQuery } from 'react-query';
import { getPost } from './post.api';
import { IPostComments } from './post.types';

export const usePost = (permalink: string) => {
  return useQuery<IPostComments, Error>(permalink, () => getPost(permalink));
};
