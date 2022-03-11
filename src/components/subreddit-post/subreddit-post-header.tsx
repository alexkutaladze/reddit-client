import { Box, Divider, HStack, Text } from 'native-base';
import React from 'react';
import { formatScore } from '../../util/functions/format-score';
import { getPostAge } from '../../util/functions/post-age';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  postData: {
    title: string;
    author: string;
    score: number;
    rate: number;
    created: number;
    subreddit: string;
  };
}

const SubredditPostHeader = (props: Props) => {
  const {
    postData: { title, author, score, rate, created, subreddit },
  } = props;
  return (
    <Box>
      <Text fontSize={16} fontWeight={500} pb={2}>
        {title}
      </Text>
      <Text color="dark.500">
        in <Text fontWeight={500}>{subreddit}</Text> by{' '}
        <Text fontWeight={500}>{author}</Text>
      </Text>
      <HStack alignItems={'center'} pt={2}>
        <Icon name="arrow-up" color="white" size={15} />
        <Text pl={1} pr={2}>
          {formatScore(score)}
        </Text>
        <Icon name="happy-outline" color="white" size={15} />
        <Text pl={1} pr={2}>
          {rate * 100}%
        </Text>
        <Icon name="time-outline" color="white" size={15} />
        <Text pl={1} pr={2}>
          {getPostAge(created)}
        </Text>
      </HStack>
      <Divider mt={2} />
    </Box>
  );
};

export default SubredditPostHeader;
