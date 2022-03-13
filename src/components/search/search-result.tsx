import { HStack, Spacer, Text, theme } from 'native-base';
import React from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';
import { ISubredditData } from '../../api/search/search.types';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  subreddit: ISubredditData;
}

const SearchResult = (props: Props) => {
  const { subreddit } = props;
  const { icon_img, display_name } = subreddit.data;

  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate('subreddit', { display_name });
  };

  return (
    <TouchableHighlight
      onPress={handlePress}
      underlayColor={theme.colors.dark['200']}
      style={styles.btn}>
      <HStack
        rounded="sm"
        p={1}
        w="full"
        h={10}
        bg="dark.200"
        alignItems={'center'}>
        <Image
          style={styles.image}
          source={{
            uri: icon_img
              ? icon_img
              : 'https://www.redditstatic.com/mweb2x/img/planet.png',
          }}
        />

        <Text>{display_name}</Text>
        <Spacer />
        <Icon name="open-outline" color={theme.colors.blue['500']} size={20} />
      </HStack>
    </TouchableHighlight>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  btn: { marginBottom: 12, borderRadius: 10 },
  image: {
    aspectRatio: 1,
    height: '100%',
    borderRadius: 20,
    marginRight: 8,
  },
});
