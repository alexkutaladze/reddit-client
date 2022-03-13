import React from 'react';
import { Box } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const Save = () => (
  <Box
    bg={'green.500'}
    flex={1}
    justifyContent="center"
    alignItems="flex-end"
    pr={2}>
    <Icon name="bookmark-outline" color="white" size={40} />
  </Box>
);

export default Save;
