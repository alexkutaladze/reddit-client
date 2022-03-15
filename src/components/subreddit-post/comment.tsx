import {
  Dimensions,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { Box, Divider, HStack, Spacer, Text } from 'native-base';
import RenderHTML from 'react-native-render-html';
import { IComment } from '../../api/post/post.types';
import { getPostAge } from '../../util/functions/post-age';
import Icon from 'react-native-vector-icons/Ionicons';

const getCommentBorders = (depth: number) => {
  switch (depth) {
    case 0:
      return {};
    case 1:
      return { borderLeftColor: 'red.500', borderLeftWidth: 1 };
    case 2:
      return { borderLeftColor: 'blue.500', borderLeftWidth: 1 };
    case 3:
      return { borderLeftColor: 'green.500', borderLeftWidth: 1 };
    case 4:
      return { borderLeftColor: 'yellow.500', borderLeftWidth: 1 };
  }
};

const { width } = Dimensions.get('window');
interface Props {
  comment: IComment;
}

const Comment = (props: Props) => {
  const { comment } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(prev => !prev);
  };

  if (comment.kind === 'more') return null;
  return (
    <TouchableOpacity onPress={handleCollapse} activeOpacity={0.7}>
      <Box pt={2} pl={comment.data.depth * 1}>
        <Box
          {...getCommentBorders(comment.data.depth)}
          pl={comment.data.depth * 0.5}>
          <HStack alignItems={'center'}>
            <Text fontSize={12} color="dark.600">
              {comment.data.author} • {getPostAge(comment.data.created)}
            </Text>
            <Spacer />
            <Icon name="arrow-up" color="orange" />
            <Text pl={1}>{comment.data.score}</Text>
          </HStack>
          <CommentBody html={comment.data.body_html} />
          <Divider mt={2} />
        </Box>
        {!collapsed &&
          comment.data.replies?.data?.children instanceof Array &&
          comment.data.replies.data.children.map(reply => (
            <Comment key={reply.data.id} comment={reply} />
          ))}
      </Box>
    </TouchableOpacity>
  );
};

interface CommentBodyProps {
  html: string;
}

const CommentBody = (props: CommentBodyProps) => {
  const { html } = props;

  return useMemo(
    () => (
      <RenderHTML
        source={{ html }}
        baseStyle={styles.html}
        contentWidth={width}
      />
    ),
    [html],
  );
};

export default Comment;

const styles = StyleSheet.create({
  html: {
    fontSize: 14,
    color: 'white',
  },
});
