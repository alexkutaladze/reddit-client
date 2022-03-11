import React from 'react';
import { ISubredditPost } from '../../api/subreddit/subreddit.types';
import { Box, Divider, HStack, Spacer, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { getPostAge } from '../../util/functions/post-age';
import { formatScore } from '../../util/functions/format-score';
import { useNavigation } from '@react-navigation/native';

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
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Box m={2}>
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
    </TouchableOpacity>
  );
};

export default Post;
