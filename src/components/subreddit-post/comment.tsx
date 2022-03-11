import { Box, Divider, HStack, Spacer, Text } from 'native-base';
import React from 'react';
import { IComment } from '../../api/post/post.types';
import { getPostAge } from '../../util/functions/post-age';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  comment: IComment;
}

const Comment = (props: Props) => {
  const { comment } = props;
  return (
    <Box pt={2} pl={comment.data.depth * 2}>
      <HStack alignItems={'center'}>
        <Text fontSize={12} color="dark.600">
          {comment.data.author} • {getPostAge(comment.data.created)}
        </Text>
        <Spacer />
        <Icon name="arrow-up" color="white" />
        <Text pl={1}>{comment.data.score}</Text>
      </HStack>
      <Text>{comment.data.body}</Text>
      <Divider mt={2} />
      {comment.data.replies?.data?.children instanceof Array &&
        comment.data.replies.data.children.map(reply => (
          <Comment comment={reply} />
        ))}
    </Box>
  );
};

export default Comment;
