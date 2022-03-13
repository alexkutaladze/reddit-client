import { Box, Divider, FlatList, HStack, Input, Text } from 'native-base';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSearch } from '../../api/search';
import SearchResult from '../../components/search/search-result';
import useDebounce from '../../util/hooks/use-debounce';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading, isIdle } = useSearch(debouncedSearch);
  return (
    <Box bg="dark.100" pt={2} flex={1}>
      <Input
        mx={4}
        variant={'unstyled'}
        bg="dark.300"
        h={10}
        borderRadius={'xl'}
        fontSize={16}
        value={search}
        onChangeText={setSearch}
        InputLeftElement={
          <HStack pl={2} space={2} h="full" alignItems={'center'} py={1}>
            <Icon name="search" color="white" size={20} />
            <Divider bg="dark.200" orientation="vertical" />
          </HStack>
        }
        placeholder="Search for a subreddit"
      />
      {!isIdle &&
        (isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            ListEmptyComponent={
              <Box bg="dark.50" p={2} rounded="md">
                <Text fontSize={16} textAlign="center">
                  Nothing found {'\u2639'}
                  {'\n'} Try searching for something else?
                </Text>
              </Box>
            }
            mt={4}
            px={4}
            data={data?.data.children}
            renderItem={({ item }) => (
              <SearchResult key={item.data.id} subreddit={item} />
            )}
          />
        ))}
    </Box>
  );
};

export default SearchScreen;
