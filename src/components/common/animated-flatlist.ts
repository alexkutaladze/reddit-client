import { forwardRef } from 'react';
import { Animated, FlatList } from 'react-native';

const FlatListWithEventThrottle = forwardRef((props, ref) => (
  <FlatList
    {...props}
    scrollEventThrottle={16}
    // @ts-ignore
    ref={ref}
  />
));

export const AnimatedFlatList: typeof FlatList =
  Animated.createAnimatedComponent(FlatListWithEventThrottle);
