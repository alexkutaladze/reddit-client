import React from 'react';
import { Box } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const Downvote = () => (
  <Box bg={'blue.500'} flex={1} justifyContent="center">
    <Icon name="arrow-down" color="white" size={40} />
  </Box>
);

export default Downvote;
