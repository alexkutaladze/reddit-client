import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigator.types';
import { Subreddit } from '../screens/subreddit';
import { SubredditPost } from '../screens/subreddit-post';
import { SearchScreen } from '../screens/search';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Navigator initialRouteName="search">
      <Screen name="search" component={SearchScreen} />
      <Screen name="subreddit" component={Subreddit} />
      <Screen name="subredditPost" component={SubredditPost} />
    </Navigator>
  );
};

export default AppNavigator;
