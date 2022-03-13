import React, { FC, useState } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
  useDerivedValue,
  runOnUI,
} from 'react-native-reanimated';
import { Box } from 'native-base';
import { LayoutAnimation } from 'react-native';

const AnimatedBox = Animated.createAnimatedComponent(Box);

interface ISwipeProps {
  component: React.ReactElement;
  threshold: number;
  action: () => void;
}

interface Props {
  left?: Array<ISwipeProps>;
  right?: Array<ISwipeProps>;
}

const SwipeableView: FC<Props> = props => {
  const { children, left, right } = props;

  const translateX = useSharedValue(0);

  const [swipeToShow, setSwipeToShow] = useState<ISwipeProps | null>();

  const onPan = (x: number) => {
    if (x > 0 && left) {
      for (let i = 0; i < left.length; i++) {
        if (x < left[i].threshold) {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          return setSwipeToShow(left[i]);
        }
      }
    } else if (x < 0 && right) {
      for (let i = 0; i < right?.length; i++) {
        if (x > right[i].threshold) {
          swipeToShow !== null &&
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
          return setSwipeToShow(right[i]);
        }
      }
    }
  };

  const onEnd = () => {
    swipeToShow?.action && swipeToShow.action();
    translateX.value = withTiming(0, {}, () => {
      setSwipeToShow(null);
    });
  };

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      const { translationX } = e;
      translateX.value = translationX;
      runOnJS(onPan)(translationX);
    })
    .onEnd(() => {
      runOnJS(onEnd)();
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  }, [translateX]);
  return (
    <GestureDetector gesture={panGesture}>
      <Box>
        <Box zIndex={0} w="full" h="full" position={'absolute'} flexDir="row">
          <AnimatedBox flex={1}>
            {swipeToShow && swipeToShow.component}
          </AnimatedBox>
        </Box>
        <Animated.View style={[rStyle]}>{children}</Animated.View>
      </Box>
    </GestureDetector>
  );
};

export default SwipeableView;
