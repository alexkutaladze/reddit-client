import React from 'react';
import { Box } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const Reply = () => (
  <Box
    bg={'lightBlue.500'}
    flex={1}
    justifyContent="center"
    alignItems={'flex-end'}
    pr={2}>
    <Icon name="arrow-undo-outline" color="white" size={40} />
  </Box>
);

export default Reply;
