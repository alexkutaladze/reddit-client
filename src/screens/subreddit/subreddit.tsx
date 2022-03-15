import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import React, { useLayoutEffect, useRef, useState } from 'react';
import useSubredditPosts from '../../api/subreddit';
import { Box, Center } from 'native-base';
import Post from '../../components/subreddit/post';
import SortSegment from '../../components/subreddit/sort-segment';
import { ScreenProps } from '../../navigators/navigator.types';
import ScrollTopFAB from '../../components/subreddit/scroll-top-fab';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Time } from '../../api/subreddit/subreddit.api';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

const Subreddit = (props: ScreenProps<'subreddit'>) => {
  const { navigation, route } = props;
  const { display_name } = route.params;

  const [sort, setSort] = useState('new');
  const [timeRange, setTimeRange] = useState<Time>();

  const { data, isLoading, isRefetching, refetch } = useSubredditPosts(
    display_name,
    sort,
    timeRange,
  );
  const flatRef = useRef<FlatList<any>>();
  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: evt => {
      scrollY.value = evt.contentOffset.y;
    },
  });

  useLayoutEffect(() => {
    navigation.setOptions({ title: display_name });
  }, [display_name, navigation]);

  if (isLoading) {
    return (
      <Center flex={1}>
        <ActivityIndicator />
      </Center>
    );
  }

  return (
    <Box flex={1} bg="dark.100">
      <SortSegment sort={sort} setSort={setSort} setTimeRange={setTimeRange} />
      <AnimatedFlatlist
        onScroll={scrollHandler}
        // @ts-ignore
        ref={flatRef}
        data={data?.data.children}
        // @ts-ignore
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
