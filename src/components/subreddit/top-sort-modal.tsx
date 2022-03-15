import { Box, Pressable, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';

interface Props extends Partial<ModalProps> {
  handleDismiss: () => void;
  handleChangeTimedSort: (val: string, t: string) => void;
}

const TopSortModal = (props: Props) => {
  const { handleDismiss, handleChangeTimedSort, ...restProps } = props;

  const buttons = [
    {
      title: 'Hour',
      onPress: () => handleChangeTimedSort('top', 'hour'),
    },
    {
      title: 'Day',
      onPress: () => handleChangeTimedSort('top', 'day'),
    },
    {
      title: 'Week',
      onPress: () => handleChangeTimedSort('top', 'week'),
    },
    {
      title: 'Month',
      onPress: () => handleChangeTimedSort('top', 'month'),
    },
    {
      title: 'Year',
      onPress: () => handleChangeTimedSort('top', 'year'),
    },
    {
      title: 'All time',
      onPress: () => handleChangeTimedSort('top', 'all'),
    },
  ];
  return (
    <Modal
      animationIn={'slideInUp'}
      onBackButtonPress={handleDismiss}
      onBackdropPress={handleDismiss}
      style={styles.modal}
      {...restProps}>
      <Box borderTopRadius={'3xl'} safeAreaBottom p={4} bg="dark.400">
        {buttons.map(btn => (
          <Pressable
            key={btn.title}
            borderBottomColor="white"
            borderBottomWidth={1}
            py={2}
            onPress={() => btn.onPress()}>
            <Text fontSize={16}>{btn.title}</Text>
          </Pressable>
        ))}
      </Box>
    </Modal>
  );
};

export default TopSortModal;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
});
