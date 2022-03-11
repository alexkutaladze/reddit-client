import React from 'react';
import { Fab } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  onPress: () => void;
  scrollY: SharedValue<number>;
}

const ScrollTopFAB = (props: Props) => {
  const { onPress, scrollY } = props;

  const val = useDerivedValue(() => {
    return scrollY.value > 150 ? 1 : 0;
  }, [scrollY]);

  const rStyle = useAnimatedStyle(() => {
    const opacity = withTiming(val.value);
    const scale = withTiming(val.value);
    return { opacity, transform: [{ scale }] };
  }, [val]);
  return (
    <Animated.View style={[rStyle]}>
      <Fab
        onPress={onPress}
        colorScheme="purple"
        renderInPortal={false}
        icon={<Icon name="chevron-up" color="white" size={20} />}
      />
    </Animated.View>
  );
};

export default ScrollTopFAB;
