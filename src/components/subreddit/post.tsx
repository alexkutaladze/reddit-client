import React from 'react';
import { ISubredditPost } from '../../api/subreddit/subreddit.types';
import {
  Box,
  Divider,
  HStack,
  Image,
  Spacer,
  Text,
  Pressable,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { getPostAge } from '../../util/functions/post-age';
import { formatScore } from '../../util/functions/format-score';
import { useNavigation } from '@react-navigation/native';
import { Alert, Dimensions, Linking } from 'react-native';
import { Upvote, Downvote, Save, Reply, SwipeableView } from '../common';

const { width, height } = Dimensions.get('window');
interface Props {
  post: ISubredditPost;
}

const Post = (props: Props) => {
  const { post } = props;
  const {
    permalink,
    created,
    author,
    subreddit,
    score,
    upvote_ratio,
    title,
    num_comments,
    media,
    url,
    is_self,
    preview,
  } = post.data;
  const { navigate } = useNavigation();

  const handlePress = () => {
    navigate('subredditPost', {
      permalink,
      subreddit,
      title,
      author,
      created,
      rate: upvote_ratio,
      score,
      num_comments,
    });
  };

  const left = [
    {
      component: <Upvote />,
      threshold: width / 3,
      action: () => Alert.alert('Upvote'),
    },
    {
      component: <Downvote />,
      threshold: width,
      action: () => Alert.alert('Downvote'),
    },
  ];

  const right = [
    {
      component: <Reply />,
      threshold: -width / 3,
      action: () => Alert.alert('Reply'),
    },
    {
      component: <Save />,
      threshold: -width,
      action: () => Alert.alert('Save'),
    },
  ];

  const handleMediaPress = () => {
    Linking.openURL(url);
  };

  return (
    <SwipeableView left={left} right={right} minDistance={width / 10}>
      <Pressable onPress={handlePress}>
        <Box p={2} pb={0} bg="dark.100">
          <HStack space={2} alignItems="center">
            <Text fontSize={12} lineHeight={16} numberOfLines={1}>
              {post.data.subreddit_name_prefixed} • u/{post.data.author} •{' '}
              {getPostAge(post.data.created)}
            </Text>
          </HStack>
          <HStack>
            <Box flex={3} pr={2}>
              <Text pt={2} fontSize={16} lineHeight={20} numberOfLines={3}>
                {post.data.title}
              </Text>
            </Box>
            {media && media?.oembed?.thumbnail_url && (
              <Pressable flex={1} onPress={handleMediaPress}>
                <Image
                  source={{ uri: media.oembed.thumbnail_url }}
                  flex={1}
                  bg="black"
                  alt={media.oembed.title}
                />
                {media.oembed.type === 'video' && (
                  <Box
                    w="full"
                    h="full"
                    position={'absolute'}
                    alignItems="center"
                    justifyContent={'center'}>
                    <Icon name="play-circle-outline" color="white" size={20} />
                  </Box>
                )}
              </Pressable>
            )}
          </HStack>
          {!is_self && !media && (
            <Pressable
              onPress={handleMediaPress}
              bg="dark.200"
              rounded={'lg'}
              p={2}
              flexDir="row"
              alignItems={'center'}
              mt={3}>
              {preview ? (
                <Image
                  w="full"
                  style={{
                    aspectRatio:
                      preview.images[0].source.width /
                      preview.images[0].source.height,
                  }}
                  maxH={height / 2}
                  source={{ uri: url }}
                  resizeMode="contain"
                  alt={url}
                />
              ) : (
                <>
                  <Icon name="compass-outline" color="white" size={30} />
                  <Divider bg="dark.400" orientation="vertical" mx={2} />
                  <Text flexShrink={1} numberOfLines={1}>
                    {url}
                  </Text>
                </>
              )}
            </Pressable>
          )}
          {/* {!is_self && preview && preview.images.length && (
            <Image
              mt={2}
              w="full"
              h={10}
              source={{ uri: preview.images[0].source.url }}
              alt={preview.images[0].source.url}
            />
          )} */}
          <HStack pt={2} alignItems={'center'}>
            <Icon name="chatbubble-outline" color="white" />
            <Text pl={1}>{post.data.num_comments}</Text>
            <Spacer />
            <Icon name="caret-up-circle" size={25} />
            <Text w={10} textAlign="center">
              {formatScore(post.data.score)}
            </Text>
            <Icon name="caret-down-circle" size={25} />
          </HStack>
          <Divider mt={2} />
        </Box>
      </Pressable>
    </SwipeableView>
  );
};

export default Post;
