import React from 'react';
import { ISubredditPost } from '../../api/subreddit/subreddit.types';
import { Box, Divider, HStack, Spacer, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { getPostAge } from '../../util/functions/post-age';
import { formatScore } from '../../util/functions/format-score';
import { useNavigation } from '@react-navigation/native';
import SwipeableView from '../common/swipeable-view';
import { Alert, Dimensions, Pressable } from 'react-native';

const { width } = Dimensions.get('window');
interface Props {
  post: ISubredditPost;
}

const Post = (props: Props) => {
  const { post } = props;
  const {
    permalink,
    created,
    author,
    subreddit,
    score,
    upvote_ratio,
    title,
    num_comments,
  } = post.data;
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate('subredditPost', {
      permalink,
      subreddit,
      title,
      author,
      created,
      rate: upvote_ratio,
      score,
      num_comments,
    });
  };

  const left = [
    {
      component: <Upvote />,
      threshold: width / 3,
      action: () => Alert.alert('Upvote'),
    },
    {
      component: <Downvote />,
      threshold: width,
      action: () => Alert.alert('Downvote'),
    },
  ];

  const right = [
    {
      component: <Reply />,
      threshold: -width / 3,
      action: () => Alert.alert('Reply'),
    },
    {
      component: <Save />,
      threshold: -width,
      action: () => Alert.alert('Save'),
    },
  ];

  return (
    <SwipeableView left={left} right={right}>
      <Pressable onPress={handlePress}>
        <Box p={2} pb={0} bg="dark.100">
          <HStack space={2} alignItems="center">
            <Text fontSize={12} lineHeight={16} numberOfLines={1}>
              {post.data.subreddit_name_prefixed} • u/{post.data.author} •{' '}
              {getPostAge(post.data.created)}
            </Text>
          </HStack>
          <Text pt={2} fontSize={16} lineHeight={20} numberOfLines={3}>
            {post.data.title}
          </Text>
          <HStack pt={2} alignItems={'center'}>
            <Icon name="chatbubble-outline" color="white" />
            <Text pl={1}>{post.data.num_comments}</Text>
            <Spacer />
            <Icon name="caret-up-circle" size={25} />
            <Text w={10} textAlign="center">
              {formatScore(post.data.score)}
            </Text>
            <Icon name="caret-down-circle" size={25} />
          </HStack>
          <Divider mt={2} />
        </Box>
      </Pressable>
    </SwipeableView>
  );
};

const Upvote = () => (
  <Box bg={'orange.500'} flex={1} justifyContent="center">
    <Icon name="arrow-up" color="white" size={40} />
  </Box>
);

const Downvote = () => (
  <Box bg={'blue.500'} flex={1} justifyContent="center">
    <Icon name="arrow-down" color="white" size={40} />
  </Box>
);

const Reply = () => (
  <Box
    bg={'lightBlue.500'}
    flex={1}
    justifyContent="center"
    alignItems={'flex-end'}
    pr={2}>
    <Icon name="arrow-undo-outline" color="white" size={40} />
  </Box>
);

const Save = () => (
  <Box
    bg={'green.500'}
    flex={1}
    justifyContent="center"
    alignItems="flex-end"
    pr={2}>
    <Icon name="bookmark-outline" color="white" size={40} />
  </Box>
);

export default Post;
