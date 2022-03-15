import React, { Dispatch, SetStateAction, useState } from 'react';
import { Pressable, HStack, Text, Center } from 'native-base';
import TopSortModal from './top-sort-modal';
import { Time } from '../../api/subreddit/subreddit.api';

interface Props {
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
  setTimeRange: Dispatch<SetStateAction<Time | undefined>>;
}

const SortSegment = (props: Props) => {
  const [topSortModalVisible, setTopSortModalVisible] = useState(false);
  const { setSort, sort, setTimeRange } = props;
  const handleChangeSort = (value: string) => setSort(value);
  const handleChangeTimedSort = (val: string, t: string) => {
    setSort(val);
    setTimeRange(t as Time);
    setTopSortModalVisible(false);
  };

  return (
    <>
      <HStack borderBottomColor={'white'} borderBottomWidth={1} w="full" h="10">
        <Pressable onPress={() => handleChangeSort('new')} flex={1}>
          <Center
            flex={1}
            m={2}
            bg={sort === 'new' ? 'purple.700' : 'transparent'}
            borderRadius={'xl'}>
            <Text>New</Text>
          </Center>
        </Pressable>
        <Pressable onPress={() => handleChangeSort('hot')} flex={1}>
          <Center
            bg={sort === 'hot' ? 'purple.700' : 'transparent'}
            borderRadius="xl"
            m={2}
            flex={1}>
            <Text>Hot</Text>
          </Center>
        </Pressable>
        <Pressable onPress={() => setTopSortModalVisible(true)} flex={1}>
          <Center
            bg={sort === 'top' ? 'purple.700' : 'transparent'}
            borderRadius="xl"
            m={2}
            flex={1}>
            <Text>Top</Text>
          </Center>
        </Pressable>
      </HStack>
      <TopSortModal
        isVisible={topSortModalVisible}
        handleDismiss={() => setTopSortModalVisible(false)}
        handleChangeTimedSort={handleChangeTimedSort}
      />
    </>
  );
};

export default SortSegment;
