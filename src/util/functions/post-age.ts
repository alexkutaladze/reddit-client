import { formatDistanceStrict } from 'date-fns';

export const getPostAge = (post_creation_date: number) => {
  const today = new Date();
  const postDate = new Date(post_creation_date * 1000);

  return formatDistanceStrict(today, postDate)
    .replace(/ second[s]?/, 's')
    .replace(/ minute[s]?/, 'm')
    .replace(/ hour[s]?/, 'h')
    .replace(/ day[s]?/, 'd')
    .replace(/ year[s]?/, 'y');
};
