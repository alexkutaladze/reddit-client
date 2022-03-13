import { Box } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Upvote = () => (
  <Box bg={'orange.500'} flex={1} justifyContent="center">
    <Icon name="arrow-up" color="white" size={40} />
  </Box>
);

export default Upvote;
