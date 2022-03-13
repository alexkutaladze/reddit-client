import React, { useLayoutEffect } from 'react';
import { FlatList } from 'native-base';
import { ScreenProps } from '../../navigators/navigator.types';

import { usePost } from '../../api/post';

import SubredditPostHeader from '../../components/subreddit-post/subreddit-post-header';
import { ActivityIndicator } from 'react-native';
import Comment from '../../components/subreddit-post/comment';

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

  const { data } = usePost(permalink);
  return (
    <FlatList
      px={4}
      pt={4}
      flex={1}
      bg="dark.100"
      ListHeaderComponent={<SubredditPostHeader postData={postData} />}
      data={data?.[1].data.children}
      ListEmptyComponent={
        data?.[1].data.children.length === 0 ? null : <ActivityIndicator />
      }
      renderItem={({ item }) => <Comment key={item.data.id} comment={item} />}
      initialNumToRender={10}
    />
  );
};

export default SubredditPost;
