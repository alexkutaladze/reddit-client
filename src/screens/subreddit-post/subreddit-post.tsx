import React, { useEffect, useLayoutEffect } from 'react';
import { Box, HStack, Text } from 'native-base';
import { ScreenProps } from '../../navigators/navigator.types';

import { usePost } from '../../api/post';

import SubredditPostHeader from '../../components/subreddit-post/subreddit-post-header';
import { ActivityIndicator } from 'react-native';
import Comment from '../../components/subreddit-post/comment';
import CommentList from '../../components/subreddit-post/comment-list';

const SubredditPost = (props: ScreenProps<'subredditPost'>) => {
  const { route, navigation } = props;
  const {
    permalink,
    author,
    title,
    num_comments,
    created,
    rate,
    score,
    subreddit,
  } = route.params;

  const postData = {
    author,
    title,
    created,
    rate,
    score,
    subreddit,
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${num_comments} comments` });
  }, [navigation, num_comments]);

  const { data, isLoading } = usePost(permalink);
  return (
    <Box px={4} pt={4} flex={1} bg="dark.100">
      <SubredditPostHeader postData={postData} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <CommentList comments={data?.[1].data.children!} />
      )}
    </Box>
  );
};

export default SubredditPost;
