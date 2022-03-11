import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useSubredditPosts } from '../../api/subreddit';
import { Box, Center } from 'native-base';
import Post from '../../components/subreddit/post';
import SortSegment from '../../components/subreddit/sort-segment';
import { ScreenProps } from '../../navigators/navigator.types';
import ScrollTopFAB from '../../components/subreddit/scroll-top-fab';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const Subreddit = (props: ScreenProps<'subreddit'>) => {
  const { navigation } = props;
  const [sort, setSort] = useState('new');
  const { data, isLoading, isRefetching, refetch } = useSubredditPosts(
    'programming',
    sort,
  );
  const flatRef = useRef<FlatList<any>>();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: evt => {
      scrollY.value = evt.contentOffset.y;
    },
  });

  useEffect(() => {
    navigation.setOptions({ title: 'Programming' });
  }, [navigation]);

  if (isLoading) {
    return (
      <Center flex={1}>
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <Box flex={1} bg="dark.100">
      <SortSegment setSort={setSort} />
      <AnimatedFlatlist
        onScroll={scrollHandler}
        ref={flatRef}
        data={data?.data.children}
        renderItem={({ item }) => <Post post={item} />}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
      />
      <ScrollTopFAB
        onPress={() => flatRef.current?.scrollToOffset({ offset: 0 })}
        scrollY={scrollY}
      />
    </Box>
  );
};

export default Subreddit;
