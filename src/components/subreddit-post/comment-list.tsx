import { FlatList } from 'react-native';
import React from 'react';
import { IComment } from '../../api/post/post.types';
import Comment from './comment';

interface Props {
  comments: Array<IComment>;
}

const CommentList = (props: Props) => {
  const { comments } = props;
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <Comment comment={item} />}
      initialNumToRender={10}
    />
  );
};

export default CommentList;
