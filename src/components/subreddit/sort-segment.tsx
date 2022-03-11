import React, { Dispatch, SetStateAction } from 'react';
import { Pressable, HStack, Text, Center } from 'native-base';

interface Props {
  setSort: Dispatch<SetStateAction<string>>;
}

const SortSegment = (props: Props) => {
  const { setSort } = props;
  const handleChangeSort = (sort: string) => setSort(sort);
  return (
    <HStack w="full" h="10">
      <Pressable
        onPress={() => handleChangeSort('new')}
        borderColor={'blue.200'}
        borderWidth="1"
        flex={1}>
        <Center flex={1}>
          <Text>New</Text>
        </Center>
      </Pressable>
      <Pressable
        onPress={() => handleChangeSort('hot')}
        borderColor={'blue.200'}
        borderWidth="1"
        flex={1}>
        <Center flex={1}>
          <Text>Hot</Text>
        </Center>
      </Pressable>
      <Pressable
        onPress={() => handleChangeSort('top')}
        borderColor={'blue.200'}
        borderWidth="1"
        flex={1}>
        <Center flex={1}>
          <Text>Top</Text>
        </Center>
      </Pressable>
    </HStack>
  );
};

export default SortSegment;
