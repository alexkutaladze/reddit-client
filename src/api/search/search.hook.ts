import { useQuery } from 'react-query';
import search from './search.api';
import { ISubreddit } from './search.types';

const useSearch = (query: string) => {
  console.log(query.length);
  return useQuery<ISubreddit, Error>(`search-${query}`, () => search(query), {
    enabled: query.length > 0,
  });
};

export default useSearch;
